import Link from 'next/link'

export default function AppointmentBar() {
  return (
    <div className="w-full bg-sky-500 text-white py-2 px-4 flex items-center justify-center gap-4 text-sm font-semibold" style={{ backgroundColor: '#0EA5E9' }}>
      <span>New Patients Welcome — Book Online Today</span>
      <Link
        href="/book"
        className="bg-white text-sky-600 px-4 py-1 rounded-full text-xs font-bold hover:bg-sky-50 transition-colors"
        style={{ color: '#0284C7' }}
      >
        Book Appointment
      </Link>
    </div>
  )
}
