import Link from 'next/link'
import FaqAccordion from '@/components/services/FaqAccordion'
import AppointmentCta from '@/components/services/AppointmentCta'

export const metadata = {
  title: 'Invisalign & Orthodontics | Sunridge Dental Group — Twin Falls, ID',
  description:
    'Invisalign Gold certified provider in Twin Falls, ID. Straighter teeth for teens and adults with clear aligners or traditional braces. Dr. Marcus Webb.',
}

const steps = [
  {
    num: '1',
    title: 'Free Consultation',
    body: 'Dr. Webb evaluates your bite, discusses your goals, and determines if Invisalign is the right fit. Takes about 30 minutes.',
  },
  {
    num: '2',
    title: 'Custom Treatment Plan',
    body: 'Digital scans (no goopy impressions) create a precise 3D model. You\'ll see a simulation of your final result before you begin.',
  },
  {
    num: '3',
    title: 'Wear Your Aligners',
    body: 'Wear clear aligners 20-22 hours per day, switching to a new set every 1-2 weeks. Most patients finish in 6-18 months.',
  },
  {
    num: '4',
    title: 'Retainer & Results',
    body: 'After treatment, wear retainers at night to maintain your results. We provide your first set of retainers at no additional charge.',
  },
]

const qualifyCards = [
  {
    title: 'Adults',
    body: 'Any adult with crowded, gapped, or crooked teeth — no age limit. Aligners are virtually invisible in professional settings.',
  },
  {
    title: 'Teens',
    body: 'Invisalign Teen includes compliance indicators and replacement aligners for active teenagers.',
  },
  {
    title: 'Mild-to-Moderate Cases',
    body: 'Overcrowding, spacing, crossbite, overbite, underbite. Complex cases may require traditional braces.',
  },
  {
    title: 'Patients Who Want Flexibility',
    body: 'Remove aligners for eating, drinking, and special occasions. No food restrictions.',
  },
]

const faqs = [
  {
    question: 'How long does Invisalign take?',
    answer:
      'Most adults complete treatment in 12-18 months. Mild cases can finish in as little as 6 months. Teens may take slightly longer depending on compliance.',
  },
  {
    question: 'Does Invisalign hurt?',
    answer:
      'You may feel mild pressure or soreness when switching to a new aligner tray — this is normal and means the aligners are working. Most patients describe it as minor and brief, resolving within 1-2 days.',
  },
  {
    question: 'How much does Invisalign cost?',
    answer:
      'Invisalign typically costs $3,500-$6,000 depending on case complexity. Some dental insurance plans cover a portion of orthodontic treatment. We offer financing through CareCredit.',
  },
  {
    question: 'What is an Invisalign Gold provider?',
    answer:
      'Gold is the third of seven Invisalign provider tiers, achieved by completing 20+ cases per year. Higher tiers signal more hands-on experience and ongoing clinical education.',
  },
  {
    question: 'Can I eat normally with Invisalign?',
    answer:
      'Yes — remove your aligners before eating or drinking anything other than water. You can eat whatever you like with no restrictions, unlike traditional braces.',
  },
]

export default function OrthodonticsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-sky-50 to-teal-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block rounded-full bg-[#0EA5E9]/10 px-4 py-1.5 text-sm font-semibold text-[#0EA5E9] mb-6">
            Orthodontics
          </span>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight md:text-6xl">
            Straighter Teeth Without the Metal
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            Dr. Marcus Webb is an Invisalign Gold certified provider — bringing expert aligner treatment to Twin Falls, Idaho.
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

      {/* Invisalign Gold Badge Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border-2 border-[#0EA5E9] px-6 py-3 mb-8">
            <span className="text-2xl">★</span>
            <span className="text-lg font-bold text-[#0EA5E9]">Invisalign Gold Certified Provider</span>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Invisalign Gold certification means Dr. Webb has completed 20+ Invisalign cases in the past year, demonstrating consistent expertise and hands-on experience. Higher-tier providers receive priority clinical support and access to advanced training. When you choose Sunridge Dental, you&apos;re choosing a proven Invisalign provider.
          </p>
        </div>
      </section>

      {/* How Invisalign Works */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            How It Works — 4 Simple Steps
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl shadow-sm p-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                  style={{ backgroundColor: '#0EA5E9' }}
                >
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Braces */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-xl border border-slate-200 p-8 md:p-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              We Also Offer Traditional Braces
            </h2>
            <p className="text-lg text-slate-600">
              Modern metal braces are smaller, more comfortable, and more effective than ever. For complex cases or patients who prefer braces, we offer full orthodontic treatment. Ask about our braces options at your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Who Is Invisalign Right For?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualifyCards.map((card) => (
              <div
                key={card.title}
                className="border-l-4 border-[#0EA5E9] bg-white rounded-xl shadow-sm p-6"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Start with a Free Orthodontic Consultation
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Dr. Webb will assess your smile and help you decide if Invisalign or braces is the right path.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book"
              className="rounded-lg px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0EA5E9' }}
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+12085550247"
              className="rounded-lg border-2 border-[#0EA5E9] px-8 py-4 text-base font-semibold text-[#0EA5E9] transition-opacity hover:opacity-90"
            >
              Call (208) 555-0247
            </a>
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
