import Link from 'next/link'
import FaqAccordion from '@/components/services/FaqAccordion'
import AppointmentCta from '@/components/services/AppointmentCta'

export const metadata = {
  title: 'General Dentistry | Sunridge Dental Group — Twin Falls, ID',
  description:
    'Comprehensive dental exams, cleanings, fillings, crowns, and more in Twin Falls, Idaho.',
}

const services = [
  {
    title: 'Comprehensive Dental Exams',
    body: 'Thorough examination of teeth, gums, bite, and oral tissues. Includes digital X-rays and cancer screening.',
  },
  {
    title: 'Digital X-Rays',
    body: 'Low-radiation digital X-rays allow us to detect cavities, bone loss, and hidden problems early. Up to 90% less radiation than traditional X-rays.',
  },
  {
    title: 'Teeth Cleanings & Hygiene',
    body: 'Professional cleanings remove plaque and tartar your toothbrush can\'t reach. Recommended every 6 months for most patients.',
  },
  {
    title: 'Tooth-Colored Fillings',
    body: 'We use composite resin fillings that match your tooth color — no mercury, no silver, no embarrassing metal showing when you smile.',
  },
  {
    title: 'Dental Crowns (CEREC Same-Day)',
    body: 'Using CEREC technology, we design and mill your permanent porcelain crown in one visit — no temporary crown needed.',
  },
  {
    title: 'Root Canal Therapy',
    body: 'Modern root canals are virtually painless. We save your natural tooth, relieve pain, and get you back to your life quickly.',
  },
  {
    title: 'Tooth Extractions',
    body: 'When a tooth must be removed, we make the experience as comfortable as possible with gentle technique and effective anesthesia.',
  },
  {
    title: 'Dentures & Partial Dentures',
    body: 'Full and partial dentures that restore function and confidence. We offer traditional and implant-supported options.',
  },
]

const affordability = [
  {
    heading: 'Flexible Payment Plans',
    body: 'CareCredit and Sunbit financing available',
  },
  {
    heading: 'Most Insurance Accepted',
    body: 'Delta Dental, BCBS, Cigna, Aetna, United Healthcare',
  },
  {
    heading: 'Uninsured? Ask About Our $99 New Patient Special',
    body: 'First exam + X-rays for $99',
  },
]

const faqs = [
  {
    question: 'How often should I get a dental cleaning?',
    answer:
      'Most patients benefit from cleanings every 6 months. However, if you have gum disease, heavy tartar buildup, or certain health conditions, your dentist may recommend every 3-4 months. We\'ll give you a personalized recommendation at your exam.',
  },
  {
    question: 'Does getting a dental crown hurt?',
    answer:
      'No. We numb the area completely before any work begins. Most patients feel only mild pressure. With CEREC same-day crowns, you also avoid a second appointment and temporary crown.',
  },
  {
    question: 'Are dental X-rays safe?',
    answer:
      'Yes. Digital X-rays expose you to up to 90% less radiation than traditional film X-rays. The amount of radiation from a dental X-ray is comparable to what you receive on a short airplane flight.',
  },
  {
    question: 'What is CEREC and how does it work?',
    answer:
      'CEREC is a computer-aided design and milling system that lets us create a permanent porcelain crown during your visit. We scan your tooth digitally, design the crown on screen, and mill it chairside while you wait — typically in about 90 minutes.',
  },
  {
    question: 'Do you accept my insurance?',
    answer:
      'We accept most major dental insurance plans including Delta Dental, Blue Cross Blue Shield, Cigna, Aetna, and United Healthcare. Call us and we\'ll verify your benefits before your appointment.',
  },
  {
    question: 'What if I haven\'t been to the dentist in several years?',
    answer:
      'You\'re not alone — and you\'re always welcome here. We\'ll assess your current oral health without judgment and create a treatment plan that fits your budget and schedule.',
  },
]

export default function GeneralDentistryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block rounded-full bg-[#0EA5E9]/10 px-4 py-1.5 text-sm font-semibold text-[#0EA5E9] mb-6">
            General Dentistry
          </span>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight md:text-6xl">
            Complete Dental Care for the Whole Family
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            From routine cleanings to root canals, we provide everything your family needs for a healthy smile.
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

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Our General Dentistry Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              We accept Delta Dental, BCBS, Cigna, Aetna, and most major insurance plans.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="border-l-4 border-[#0EA5E9] bg-white rounded-xl shadow-sm p-6"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affordability Section */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            We make dental care affordable
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {affordability.map((item) => (
              <div
                key={item.heading}
                className="rounded-xl bg-sky-50 p-8 text-center"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.heading}</h3>
                <p className="text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <AppointmentCta />
    </>
  )
}
