import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  // 1. Parse and validate with type guards
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  const raw = body && typeof body === 'object' ? (body as Record<string, unknown>) : {}

  const patientType = typeof raw.patientType === 'string' ? raw.patientType.trim() : ''
  const serviceType = typeof raw.serviceType === 'string' ? raw.serviceType.trim() : ''
  const patientName = typeof raw.patientName === 'string' ? raw.patientName.trim() : ''
  const phone = typeof raw.phone === 'string' ? raw.phone.trim() : ''
  const email = typeof raw.email === 'string' ? raw.email.trim() : ''
  const dob = typeof raw.dob === 'string' ? raw.dob : null
  const preferredDate = typeof raw.preferredDate === 'string' ? raw.preferredDate : null
  const preferredTime = typeof raw.preferredTime === 'string' ? raw.preferredTime.trim() : ''
  const doctorPreference =
    typeof raw.doctorPreference === 'string' ? raw.doctorPreference.trim() : ''
  const insuranceCarrier =
    typeof raw.insuranceCarrier === 'string' ? raw.insuranceCarrier.trim() : ''
  const notes = typeof raw.notes === 'string' ? raw.notes.trim() : ''

  if (!patientType || !serviceType || !patientName || !phone || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }
  if (
    patientName.length > 100 ||
    phone.length > 30 ||
    email.length > 200 ||
    notes.length > 2000
  ) {
    return NextResponse.json({ error: 'Input too long' }, { status: 400 })
  }

  // 2. Insert to Supabase
  const supabase = createAdminClient()
  const appointmentRow = {
    patient_type: patientType,
    patient_name: patientName,
    dob: dob || null,
    phone,
    email,
    service_type: serviceType,
    preferred_date: preferredDate || null,
    preferred_time: preferredTime,
    doctor_preference: doctorPreference,
    insurance_carrier: insuranceCarrier,
    notes,
    status: 'pending',
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error: dbError } = await supabase.from('appointments').insert(appointmentRow as any)
  if (dbError) {
    console.error('Supabase insert error:', dbError)
    return NextResponse.json({ error: 'Failed to save appointment' }, { status: 500 })
  }

  // 3. Send notification to clinic
  const isEmergency = serviceType === 'Emergency Appointment'
  await resend.emails
    .send({
      from: 'Sunridge Dental Website <noreply@sunridgedental.worker-bee.app>',
      to: ['scheduling@sunridgedental.com'],
      subject: isEmergency
        ? '🚨 URGENT: Emergency Appointment Request'
        : `New Appointment Request — ${serviceType}`,
      text: `NEW APPOINTMENT REQUEST\n\nPatient: ${patientName}\nType: ${patientType}\nService: ${serviceType}\nPhone: ${phone}\nEmail: ${email}\nDOB: ${dob || 'Not provided'}\nPreferred Date: ${preferredDate || 'Flexible'}\nPreferred Time: ${preferredTime}\nDoctor Preference: ${doctorPreference || 'No preference'}\nInsurance: ${insuranceCarrier || 'Uninsured/not provided'}\nNotes: ${notes || 'None'}`,
    })
    .catch(console.error)

  // 4. Send confirmation to patient
  await resend.emails
    .send({
      from: 'Sunridge Dental Group <noreply@sunridgedental.worker-bee.app>',
      to: [email],
      subject: 'Appointment Request Received — Sunridge Dental Group',
      text: `Hi ${patientName},\n\nThank you for requesting an appointment with Sunridge Dental Group!\n\nWe received your request for: ${serviceType}\n\nOur team will call you within 1 business day to confirm your appointment.\n\nIf this is a dental emergency, please call us directly: (208) 555-0247\n\nSunridge Dental Group\n1650 Addison Ave E, Suite 100\nTwin Falls, ID 83301\n(208) 555-0247`,
    })
    .catch(console.error)

  return NextResponse.json({ success: true })
}
