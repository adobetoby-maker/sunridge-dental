import Link from 'next/link'
import FaqAccordion from '@/components/services/FaqAccordion'
import AppointmentCta from '@/components/services/AppointmentCta'

export const metadata = {
  title: 'Pediatric Dentistry | Sunridge Dental Group — Twin Falls, ID',
  description:
    'Gentle, fun dental care for children ages 1-18 in Twin Falls, Idaho. Dr. Sofia Reyes makes every visit a positive experience.',
}

const visitSteps = [
  {
    title: 'Before You Arrive',
    body: 'Bring your child\'s insurance card, any prior dental records, and a list of medications. We recommend scheduling morning appointments when children are most alert.',
  },
  {
    title: 'During the Visit',
    body: 'Dr. Reyes will do a gentle exam of your child\'s teeth, gums, bite, and jaw development. We\'ll count their teeth, clean them if appropriate, and take X-rays if needed. No rush, no pressure.',
  },
  {
    title: 'After the Visit',
    body: 'You\'ll leave with a clear picture of your child\'s oral health, personalized home care tips, and a fun reward for your little one. We\'ll schedule your next cleaning before you go.',
  },
]

const features = [
  {
    title: 'Entertainment During Treatment',
    body: 'TVs overhead so kids can watch their favorite shows during cleanings and exams.',
  },
  {
    title: 'Prize Box',
    body: 'Every patient gets to choose from our prize box at the end of their visit.',
  },
  {
    title: 'Patient Educators',
    body: 'We explain every step in kid-friendly language — no scary words, no surprises.',
  },
  {
    title: 'Parent-Included Appointments',
    body: 'Parents are always welcome in the treatment room. We believe in transparency and partnership.',
  },
]

const services = [
  'First dental visit recommended by age 1 or when first tooth appears',
  'Baby teeth cleanings & exams',
  'Fluoride treatments — strengthens enamel',
  'Dental sealants — protective coating for back teeth (most effective at ages 6-12)',
  'Space maintainers — preserve room when baby teeth are lost early',
  'Orthodontic monitoring — we watch jaw development and refer when appropriate',
  'Teen dental care — through age 18',
]

const faqs = [
  {
    question: 'When should my child first see a dentist?',
    answer:
      'The American Academy of Pediatric Dentistry recommends the first dental visit by age 1 or within 6 months of the first tooth erupting. Early visits help establish healthy habits and let us catch any issues early.',
  },
  {
    question: 'My child is scared of the dentist — can you help?',
    answer:
      'Absolutely. Dr. Reyes specializes in working with anxious children. We use a \'tell-show-do\' approach — explaining and demonstrating each step before doing it. Most children leave relaxed and looking forward to their next visit.',
  },
  {
    question: 'Does my child need X-rays?',
    answer:
      'Dental X-rays help us detect cavities between teeth that can\'t be seen during an exam. We use low-radiation digital X-rays and only take them when clinically necessary — typically every 1-2 years for most children.',
  },
  {
    question: 'What are dental sealants and does my child need them?',
    answer:
      'Sealants are a thin protective coating painted onto the chewing surfaces of back teeth. They prevent up to 80% of cavities in those areas. We typically recommend them for children ages 6-12 when their permanent molars come in.',
  },
  {
    question: 'How do I prepare my child for their first visit?',
    answer:
      'Talk positively about the dentist — avoid words like \'hurt,\' \'needle,\' or \'drill.\' Read books about dental visits. Bring a comfort item if needed. We handle the rest.',
  },
]

export default function PediatricDentistryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-teal-50 to-sky-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-6">
            Pediatric Dentistry
          </span>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight md:text-6xl">
            We Love Seeing Little Smiles
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            Dr. Sofia Reyes creates a warm, judgment-free environment where kids actually enjoy the dentist.
          </p>
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-block rounded-lg px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0EA5E9' }}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* First Visit Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            What to Expect at the First Visit
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {visitSteps.map((step, i) => (
              <div key={step.title} className="relative bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
                  style={{ backgroundColor: '#0EA5E9' }}
                >
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Features */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            A Kid-Friendly Environment
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="border-l-4 border-[#0EA5E9] bg-white rounded-xl shadow-sm p-6"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ages and Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Children We See: Ages 1 to 18
          </h2>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: '#0EA5E9' }}
                >
                  ✓
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Questions from Parents
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <AppointmentCta heading="Schedule Your Child's Visit" sub="We'll make it easy, fun, and stress-free — for parents and kids alike." />
    </>
  )
}
