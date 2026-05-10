import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/services/AnimatedSection'
import { doctors, getDoctorBySlug } from '@/lib/doctors'

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)
  if (!doctor) return {}
  return {
    title: `${doctor.name} | Sunridge Dental Group`,
    description: `${doctor.bio.slice(0, 155)}...`,
  }
}

export default async function DoctorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)

  if (!doctor) {
    notFound()
  }

  return (
    <>
      {/* Section 1 — Hero/Header */}
      <section className="relative h-64 md:h-96 w-full overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Doctor name & title */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:pb-12">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {doctor.name}
            </h1>
            <p className="mt-2 text-lg text-white/80 font-medium">{doctor.title}</p>
          </div>
        </div>
      </section>

      {/* Section 2 — Bio & Quote */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Left: bio + quote */}
              <div className="lg:col-span-2">
                <p className="text-slate-700 text-lg leading-relaxed">{doctor.bio}</p>

                <h2 className="mt-10 text-2xl font-bold text-slate-900">
                  Why I Became a Dentist
                </h2>
                <blockquote className="mt-4 border-l-4 pl-5 italic text-slate-600 text-lg leading-relaxed" style={{ borderColor: '#0EA5E9' }}>
                  {doctor.whyDentistry}
                </blockquote>
              </div>

              {/* Right: sidebar cards */}
              <div className="flex flex-col gap-6">
                {/* Education */}
                <div className="rounded-xl bg-sky-50 p-6">
                  <h3 className="text-sm font-bold text-[#0EA5E9] uppercase tracking-wide mb-3">
                    Education
                  </h3>
                  <p className="font-semibold text-slate-900">{doctor.degree}</p>
                  <p className="text-slate-600 text-sm mt-1">{doctor.school}</p>
                </div>

                {/* Services */}
                <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
                  <h3 className="text-sm font-bold text-[#0EA5E9] uppercase tracking-wide mb-3">
                    Services Offered
                  </h3>
                  <ul className="space-y-2">
                    {doctor.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-slate-700 text-sm">
                        <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0EA5E9' }}>
                          <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
                  <h3 className="text-sm font-bold text-[#0EA5E9] uppercase tracking-wide mb-3">
                    Certifications & Memberships
                  </h3>
                  <ul className="space-y-2">
                    {doctor.certifications.map((cert) => (
                      <li key={cert} className="flex items-start gap-2 text-slate-700 text-sm">
                        <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0D9488' }}>
                          <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3 — Personal Touch */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="grid gap-8 sm:grid-cols-2">
              {/* Favorite Part */}
              <div className="rounded-xl bg-white shadow-sm p-8">
                <div className="mb-4 h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0EA5E9' }}>
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Favorite Part of the Job</h3>
                <p className="text-slate-600 leading-relaxed">{doctor.favoritePart}</p>
              </div>

              {/* Outside the Office */}
              <div className="rounded-xl bg-white shadow-sm p-8">
                <div className="mb-4 h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0D9488' }}>
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Outside the Office</h3>
                <p className="text-slate-600 leading-relaxed">{doctor.outsideOffice}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#0EA5E9' }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Schedule with {doctor.name}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Ready to experience compassionate, expert dental care? Book your appointment today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-block rounded-lg bg-white px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
                style={{ color: '#0EA5E9' }}
              >
                Book Online
              </Link>
              <a
                href="tel:+12085550247"
                className="inline-block rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Call (208) 555-0247
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
