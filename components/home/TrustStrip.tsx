'use client'

import { motion } from 'framer-motion'

const items = [
  {
    icon: '🏅',
    stat: '16+ Years',
    desc: 'Serving Twin Falls families',
  },
  {
    icon: '🦷',
    stat: '3 Doctors',
    desc: 'General, cosmetic & orthodontics',
  },
  {
    icon: '⚡',
    stat: 'Same-Day Emergency',
    desc: 'Call and we\'ll fit you in',
  },
  {
    icon: '✓',
    stat: 'Most Insurance Accepted',
    desc: 'Delta Dental, BCBS, Cigna & more',
  },
]

export default function TrustStrip() {
  return (
    <section className="bg-white py-10 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 text-center min-w-[140px]"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-lg font-bold text-slate-900">{item.stat}</span>
              <span className="text-sm text-slate-500">{item.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
