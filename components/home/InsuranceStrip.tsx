'use client'

import { motion } from 'framer-motion'

const insurers = [
  { name: 'Delta Dental', className: 'bg-blue-100 text-blue-800' },
  { name: 'Blue Cross Blue Shield', className: 'bg-blue-50 text-blue-700' },
  { name: 'Cigna', className: 'bg-teal-50 text-teal-700' },
  { name: 'Aetna', className: 'bg-slate-100 text-slate-700' },
  { name: 'United Healthcare', className: 'bg-amber-50 text-amber-800' },
]

export default function InsuranceStrip() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            We Accept Most Major Insurance Plans
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {insurers.map((ins) => (
              <span
                key={ins.name}
                className={`rounded-full px-5 py-2 text-sm font-semibold ${ins.className}`}
              >
                {ins.name}
              </span>
            ))}
          </div>

          <p className="text-slate-600 text-base">
            Don't see yours? Call us — we likely accept it.{' '}
            <a
              href="tel:+12085550247"
              className="font-semibold hover:underline"
              style={{ color: '#0EA5E9' }}
            >
              (208) 555-0247
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
