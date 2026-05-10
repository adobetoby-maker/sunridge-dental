import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, phone, description, bestTime } = await req.json()
  if (!name || !phone || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
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
