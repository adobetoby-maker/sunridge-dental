import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/services/AnimatedSection'
import { doctors } from '@/lib/doctors'

export const metadata = {
  title: 'Our Doctors | Sunridge Dental Group — Twin Falls, ID',
  description:
    'Meet Dr. Rachel Kim, Dr. Marcus Webb, and Dr. Sofia Reyes — the caring dental team at Sunridge Dental Group in Twin Falls, Idaho.',
}

export default function DoctorsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block rounded-full bg-[#0EA5E9]/10 px-4 py-1.5 text-sm font-semibold text-[#0EA5E9] mb-6">
            Our Dental Team
          </span>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight md:text-6xl">
            Meet Your Dental Team
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            Three dedicated dentists committed to your family&apos;s comfort and health.
          </p>
        </div>
      </section>

      {/* Doctor Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {doctors.map((doctor) => (
                <div
                  key={doctor.slug}
                  className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col"
                >
                  {/* Doctor Photo */}
                  <div className="relative h-80 w-full">
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-extrabold text-slate-900">{doctor.name}</h2>
                    <p className="text-[#0EA5E9] font-semibold text-sm mt-1">{doctor.title}</p>
                    <p className="text-slate-500 text-sm mt-1">
                      {doctor.years} years experience
                    </p>
                    <p className="text-slate-500 text-sm mt-0.5">{doctor.school}</p>
                    <p className="text-slate-600 italic mt-4 text-sm flex-1">
                      &ldquo;{doctor.tagline}&rdquo;
                    </p>
                    <div className="mt-6">
                      <Link
                        href={`/doctors/${doctor.slug}`}
                        className="inline-block w-full text-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: '#0EA5E9' }}
                      >
                        Meet {doctor.name.split(' ').slice(0, 2).join(' ')}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-slate-600 text-base">
            All three doctors are licensed in Idaho and committed to continuing education.
          </p>
        </div>
      </section>
    </>
  )
}
