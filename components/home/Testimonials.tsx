'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    stars: 5,
    quote: 'Dr. Kim completely transformed my smile with veneers. I finally feel confident.',
    author: 'Sarah T.',
    city: 'Twin Falls',
  },
  {
    stars: 5,
    quote: 'My kids actually look forward to their dental appointments. Dr. Reyes is incredible with children.',
    author: 'Jenny L.',
    city: 'Kimberly',
  },
  {
    stars: 5,
    quote: 'Invisalign with Dr. Webb was the best decision. Straight teeth in 14 months!',
    author: 'Amanda K.',
    city: 'Jerome',
  },
  {
    stars: 5,
    quote: 'Cracked a tooth on a Friday. They got me in same-day and I left with a crown. Incredible.',
    author: 'Robert H.',
    city: 'Twin Falls',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Testimonials() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">What Patients Are Saying</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="rounded-xl bg-white p-7 shadow-sm flex flex-col gap-3"
            >
              <div className="flex gap-0.5 text-amber-400 text-lg" aria-label={`${t.stars} out of 5 stars`}>
                {'★'.repeat(t.stars)}
              </div>
              <p className="text-slate-700 text-base leading-relaxed">"{t.quote}"</p>
              <p className="text-sm font-semibold text-slate-500">
                — {t.author}, <span className="font-normal">{t.city}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
