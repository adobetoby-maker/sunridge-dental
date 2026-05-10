import Link from 'next/link'
import FaqAccordion from '@/components/services/FaqAccordion'
import AppointmentCta from '@/components/services/AppointmentCta'
import AnimatedSection from '@/components/services/AnimatedSection'

export const metadata = {
  title: 'Cosmetic Dentistry | Sunridge Dental Group — Twin Falls, ID',
  description:
    'Teeth whitening, veneers, dental bonding, and smile makeovers in Twin Falls, Idaho. Led by Dr. Rachel Kim.',
}

const services = [
  {
    title: 'Professional Teeth Whitening',
    body: 'Up to 8 shades brighter in one in-office session. Dramatically more effective than store-bought kits. Take-home trays available for touch-ups.',
  },
  {
    title: 'Porcelain Veneers',
    body: 'Ultra-thin porcelain shells bonded to the front of your teeth — correcting chips, stains, gaps, and shape issues permanently. Veneers last 10-20 years with proper care.',
  },
  {
    title: 'Dental Bonding',
    body: 'Composite resin applied and sculpted to repair chips, cracks, and minor gaps. Completed in one appointment with no anesthesia needed in most cases.',
  },
  {
    title: 'Gum Contouring',
    body: 'Uneven or \'gummy\' smile? We gently reshape your gum line for a more balanced, attractive appearance. Minimal discomfort, lasting results.',
  },
  {
    title: 'Complete Smile Makeover',
    body: 'A personalized combination of whitening, veneers, bonding, and orthodontics to completely transform your smile. Dr. Kim will design your ideal result before treatment begins.',
  },
]

const cases = [
  {
    title: 'Veneer Transformation',
    body: 'Patient presented with severe discoloration and chipping. Full set of porcelain veneers. Treatment duration: 2 appointments.',
  },
  {
    title: 'Whitening + Bonding',
    body: 'Dark staining from coffee and tea corrected with in-office whitening. Minor chips repaired with bonding. Same-day results.',
  },
]

const faqs = [
  {
    question: 'How long do veneers last?',
    answer:
      'Porcelain veneers typically last 10-20 years with proper care. They\'re stain-resistant and designed to be permanent. Touch-up or replacement is straightforward when the time comes.',
  },
  {
    question: 'Is teeth whitening safe?',
    answer:
      'Yes. Professional whitening is safe when supervised by a dentist. We\'ll check your enamel health first and use a concentration that whitens effectively without sensitivity.',
  },
  {
    question: 'How much do veneers cost?',
    answer:
      'Veneer cost varies by case complexity — typically $1,000-$2,000 per tooth. Cosmetic procedures are generally not covered by insurance, but we offer financing through CareCredit and Sunbit.',
  },
  {
    question: 'Can I whiten my teeth if I have crowns or fillings?',
    answer:
      'Whitening only affects natural tooth enamel, not restorations. If you have visible crowns or fillings, we\'ll discuss options to help everything match for a uniform result.',
  },
  {
    question: 'How do I know which cosmetic procedure is right for me?',
    answer:
      'That\'s what your free consultation is for. Dr. Kim will evaluate your teeth, discuss your goals and budget, and recommend a plan that achieves the result you want.',
  },
]

export default function CosmeticDentistryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-6">
            Cosmetic Dentistry
          </span>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight md:text-6xl">
            Your Best Smile Starts Here
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            Dr. Rachel Kim specializes in smile transformations — from simple whitening to complete makeovers.
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
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Cosmetic Services We Offer
          </h2>
          <AnimatedSection>
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
          </AnimatedSection>
        </div>
      </section>

      {/* Before/After Preview Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">See the Results</h2>
          <AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 mb-10">
            {cases.map((c) => (
              <div key={c.title} className="rounded-xl overflow-hidden shadow-sm bg-white">
                <div className="h-48 bg-gradient-to-br from-teal-100 to-sky-100 flex items-center justify-center">
                  <span className="text-slate-400 text-sm font-medium">Case Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{c.title}</h3>
                  <p className="text-slate-600 text-sm">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/smile-gallery"
              className="text-[#0EA5E9] font-semibold hover:underline"
            >
              View Full Smile Gallery →
            </Link>
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="py-20" style={{ backgroundColor: '#0D9488' }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Book Your Free Smile Consultation</h2>
          <p className="mt-4 text-lg text-white/90">
            Dr. Kim will review your goals, walk you through your options, and give you a personalized treatment plan — at no charge.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book"
              className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-teal-700 transition-opacity hover:opacity-90"
            >
              Book Free Consultation
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

      <AppointmentCta
        heading="Ready to Transform Your Smile?"
        sub="Book your complimentary consultation with Dr. Kim today."
      />
    </>
  )
}
