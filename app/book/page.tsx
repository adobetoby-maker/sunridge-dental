import BookingForm from './BookingForm'

export const metadata = {
  title: 'Book Appointment | Sunridge Dental Group — Twin Falls, ID',
  description:
    'Request a dental appointment online at Sunridge Dental Group in Twin Falls, Idaho. New and existing patients welcome.',
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900">Book an Appointment</h1>
          <p className="mt-3 text-lg text-slate-500">
            New and existing patients welcome. We&apos;ll confirm within 1 business day.
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  )
}
