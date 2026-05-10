import AppointmentCta from '@/components/services/AppointmentCta'
import FaqAccordion from '@/components/services/FaqAccordion'
import EmergencyContactForm from '@/components/services/EmergencyContactForm'
import AnimatedSection from '@/components/services/AnimatedSection'

export const metadata = {
  title: 'Emergency Dentistry | Sunridge Dental Group — Twin Falls, ID',
  description:
    'Same-day emergency dental appointments in Twin Falls, ID. Toothache, broken tooth, lost filling — call us first.',
}

const conditions = [
  {
    title: 'Severe Toothache',
    body: 'Pain that won\'t go away with over-the-counter pain relievers, or pain that wakes you at night.',
  },
  {
    title: 'Broken or Chipped Tooth',
    body: 'A significant break, especially one exposing the inner tooth or causing sharp pain.',
  },
  {
    title: 'Knocked-Out Tooth',
    body: 'Act fast. Keep the tooth moist — in milk or between your cheek and gum. Call immediately. Time is critical.',
  },
  {
    title: 'Lost Filling or Crown',
    body: 'Exposed tooth structure can be sensitive and vulnerable to damage. We\'ll re-cement or replace it quickly.',
  },
  {
    title: 'Dental Abscess',
    body: 'Swelling in the gum, jaw, or face with or without a pimple-like bump. This is an infection and needs prompt treatment.',
  },
  {
    title: 'Dental Trauma',
    body: 'Sports injuries, falls, or accidents that affect your teeth, jaw, or gums.',
  },
]

const firstAidTips = [
  'Toothache: Rinse with warm salt water. Take over-the-counter ibuprofen (not aspirin against the gum). Do not put aspirin directly on the tooth.',
  'Broken tooth: Rinse your mouth with warm water. Apply gauze if bleeding. Apply a cold pack to reduce swelling.',
  'Knocked-out tooth: Handle by the crown, not the root. Rinse gently — don\'t scrub. Keep in milk or saline. Get to us within 1 hour.',
  'Lost crown or filling: Apply clove oil to the exposed area for temporary pain relief. Dental wax from the pharmacy can protect the area.',
]

const faqs = [
  {
    question: 'What counts as a dental emergency?',
    answer:
      'Any dental situation causing significant pain, swelling, bleeding, or that puts a tooth at risk qualifies as an emergency. When in doubt, call us — we\'d rather hear from you and help you decide than have you waiting in pain.',
  },
  {
    question: 'How quickly can I be seen for an emergency?',
    answer:
      'We keep same-day emergency slots available Monday through Friday. Call first thing in the morning for the best chance of a same-day appointment. After hours, leave a message and we\'ll return your call within 1 hour.',
  },
  {
    question: 'What should I do if I knock out a tooth?',
    answer:
      'Handle the tooth by the crown (the white part), not the root. If it\'s dirty, rinse gently with water — do not scrub. Try to reinsert it into the socket if possible, or keep it moist in milk or between your cheek and gum. Call us immediately and get in within 1 hour for the best chance of saving the tooth.',
  },
  {
    question: 'Is a dental abscess dangerous?',
    answer:
      'Yes, dental abscesses are serious infections that can spread to the jaw, neck, or head if left untreated. If you have facial swelling, fever, or difficulty swallowing or breathing, go to the emergency room immediately. Otherwise, call us for an urgent appointment.',
  },
  {
    question: 'Do you treat emergency patients who aren\'t existing patients?',
    answer:
      'Yes. We welcome new patients during dental emergencies. Please call us and let us know it\'s an emergency — we\'ll do our best to fit you in the same day.',
  },
]

export default function EmergencyDentistryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#0EA5E9' }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white mb-6">
            Emergency Dental Care
          </span>
          <h1 className="text-5xl font-extrabold text-white leading-tight md:text-6xl">
            Dental Emergency? Call Us First.
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            We keep same-day emergency slots available. Call{' '}
            <a href="tel:+12085550247" className="font-bold underline underline-offset-2">
              (208) 555-0247
            </a>{' '}
            right now.
          </p>
          <div className="mt-10">
            <a
              href="tel:+12085550247"
              className="inline-block rounded-lg bg-white px-10 py-5 text-xl font-bold text-[#0EA5E9] transition-opacity hover:opacity-90"
            >
              Call (208) 555-0247
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Phone CTA Bar */}
      <section className="bg-slate-900 py-10">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <a
            href="tel:+12085550247"
            className="block text-4xl font-extrabold text-white hover:text-[#0EA5E9] transition-colors"
          >
            Call Now: (208) 555-0247
          </a>
          <p className="mt-3 text-slate-400">
            Mon–Thu 8AM–5PM · Fri 8AM–3PM · After hours: leave a message and we&apos;ll return your call within 1 hour.
          </p>
        </div>
      </section>

      {/* What Qualifies Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Do You Have a Dental Emergency?
          </h2>
          <AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {conditions.map((c) => (
                <div
                  key={c.title}
                  className="border-l-4 border-[#0EA5E9] bg-white rounded-xl shadow-sm p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{c.title}</h3>
                  <p className="text-slate-600">{c.body}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* First Aid Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            First Aid Before You Arrive
          </h2>
          <AnimatedSection>
          <ol className="space-y-5">
            {firstAidTips.map((tip, i) => (
              <li key={tip.slice(0, 20)} className="flex items-start gap-4 bg-white rounded-xl shadow-sm p-6">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: '#0EA5E9' }}
                >
                  {i + 1}
                </span>
                <p className="text-slate-700">{tip}</p>
              </li>
            ))}
          </ol>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency Contact Form */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">
            Can&apos;t Call Right Now? Send Us a Message
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Fill out the form below and our team will call you back within 1 hour.
          </p>
          <EmergencyContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <AnimatedSection>
            <FaqAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* After-Hours Info */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">After Hours?</h3>
          <p className="text-slate-600 leading-relaxed">
            If you call after hours, please leave a detailed voicemail with your name, phone number, and description of your emergency. We return all emergency calls within 1 hour. For life-threatening emergencies, please call 911 or visit your nearest emergency room.
          </p>
        </div>
      </section>

      <AppointmentCta
        heading="Same-Day Emergency Slots Available"
        sub="Call now and we'll fit you in today."
      />
    </>
  )
}
