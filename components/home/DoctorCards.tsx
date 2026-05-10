'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const doctors = [
  {
    name: 'Dr. Rachel Kim',
    slug: 'rachel-kim',
    specialty: 'General & Cosmetic Dentistry',
    years: '14 years experience',
    school: 'USC School of Dentistry',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&auto=format&fit=crop',
    alt: 'Dr. Rachel Kim — General & Cosmetic Dentistry',
  },
  {
    name: 'Dr. Marcus Webb',
    slug: 'marcus-webb',
    specialty: 'General Dentistry & Invisalign Gold',
    years: '9 years experience',
    school: 'University of Washington',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&auto=format&fit=crop',
    alt: 'Dr. Marcus Webb — General Dentistry & Invisalign',
  },
  {
    name: 'Dr. Sofia Reyes',
    slug: 'sofia-reyes',
    specialty: 'Pediatric & General Dentistry',
    years: '6 years experience',
    school: 'University of Colorado',
    image: 'https://images.unsplash.com/_4xStiTXY1o?w=800&auto=format&fit=crop',
    alt: 'Dr. Sofia Reyes — Pediatric & General Dentistry',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function DoctorCards() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Meet Your Dental Team</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          {doctors.map((doc) => (
            <motion.div
              key={doc.slug}
              variants={cardVariants}
              className="rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="relative h-64">
                <Image
                  fill
                  className="object-cover"
                  src={doc.image}
                  alt={doc.alt}
                />
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                <p className="text-sm font-semibold" style={{ color: '#0EA5E9' }}>{doc.specialty}</p>
                <p className="text-sm text-slate-500">{doc.years}</p>
                <p className="text-sm text-slate-500">{doc.school}</p>
                <div className="mt-auto pt-4">
                  <Link
                    href={`/doctors/${doc.slug}`}
                    className="text-sm font-semibold hover:underline"
                    style={{ color: '#0D9488' }}
                  >
                    Meet {doc.name} →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
