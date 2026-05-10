'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NewPatientSpecial() {
  return (
    <section className="py-20" style={{ backgroundColor: '#0EA5E9' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            New Patient Special
          </span>
          <h2 className="text-4xl font-bold text-white">
            $99 First Exam + X-Rays
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            For patients without dental insurance. Digital X-rays included. Offer valid for new patients only.
          </p>
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-block rounded-lg bg-white px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
              style={{ color: '#0EA5E9' }}
            >
              Book Your $99 Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
