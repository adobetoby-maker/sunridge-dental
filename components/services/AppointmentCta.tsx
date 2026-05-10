import Link from 'next/link'

interface Props { heading?: string; sub?: string }

export default function AppointmentCta({
  heading = 'Ready to Schedule?',
  sub = 'Our team is here to help. Book online or call us directly.',
}: Props) {
  return (
    <section className="py-20" style={{ backgroundColor: '#0EA5E9' }}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white">{heading}</h2>
        <p className="mt-4 text-lg text-white/90">{sub}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/book"
            className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#0EA5E9] transition-opacity hover:opacity-90"
          >
            Book Appointment Online
          </Link>
          <a
            href="tel:+12085550247"
            className="rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Call (208) 555-0247
          </a>
        </div>
      </div>
    </section>
  )
}
