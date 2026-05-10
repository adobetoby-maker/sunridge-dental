'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    icon: '🦷',
    name: 'Cleanings & Exams',
    description: 'Your foundation for a healthy smile',
    href: '/services/general',
  },
  {
    icon: '✨',
    name: 'Cosmetic Dentistry',
    description: 'Whitening, veneers, and complete smile makeovers',
    href: '/services/cosmetic',
  },
  {
    icon: '😁',
    name: 'Invisalign',
    description: 'Straighter teeth without metal braces — Gold certified provider',
    href: '/services/orthodontics',
  },
  {
    icon: '👑',
    name: 'Same-Day Crowns',
    description: 'CEREC technology: your crown in one visit',
    href: '/services/general',
  },
  {
    icon: '🌟',
    name: 'Pediatric Dentistry',
    description: 'Gentle, fun dental care from age 1 to 18',
    href: '/services/pediatric',
  },
  {
    icon: '🚨',
    name: 'Emergency Dentistry',
    description: 'Same-day emergency slots — call us first',
    href: '/services/emergency',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function ServicesOverview() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Everything Your Family Needs</h2>
          <p className="mt-4 text-lg text-slate-600">
            From routine cleanings to smile transformations, we've got you covered.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              className="rounded-xl bg-white p-6 shadow-sm flex flex-col gap-3"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="text-lg font-bold text-slate-900">{service.name}</h3>
              <p className="text-sm text-slate-600 flex-1">{service.description}</p>
              <Link
                href={service.href}
                className="text-sm font-semibold hover:underline"
                style={{ color: '#0EA5E9' }}
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
