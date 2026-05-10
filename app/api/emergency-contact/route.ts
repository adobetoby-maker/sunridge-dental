import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const raw = body && typeof body === 'object' ? (body as Record<string, unknown>) : {}
  const name = typeof raw.name === 'string' ? raw.name.trim() : ''
  const phone = typeof raw.phone === 'string' ? raw.phone.trim() : ''
  const description = typeof raw.description === 'string' ? raw.description.trim() : ''
  const bestTime = typeof raw.bestTime === 'string' ? raw.bestTime.trim() : ''

  if (!name || !phone || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }
  if (name.length > 100 || phone.length > 30 || description.length > 1000 || bestTime.length > 100) {
    return NextResponse.json({ error: 'Input exceeds maximum length' }, { status: 400 })
  }
  try {
    await resend.emails.send({
      from: 'Sunridge Dental Website <noreply@sunridgedental.worker-bee.app>',
      to: ['scheduling@sunridgedental.com'],
      subject: '🚨 URGENT: Emergency Dental Request',
      text: `URGENT EMERGENCY DENTAL REQUEST\n\nName: ${name}\nPhone: ${phone}\nBest time: ${bestTime}\n\nDescription:\n${description}\n\nPlease call patient back within 1 hour.`,
    })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
