'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen max-h-[700px] min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          fill
          className="object-cover"
          src="https://images.unsplash.com/e7MJLM5VGjY?w=1200&auto=format&fit=crop"
          alt="Modern dental office"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-extrabold text-white leading-tight md:text-6xl">
              Comfortable Care for the Whole Family
            </h1>
            <p className="mt-6 text-xl text-white/90">
              General, cosmetic, and orthodontic dentistry in Twin Falls, ID — serving families since 2008.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="rounded-lg px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#0EA5E9' }}
              >
                Book Appointment
              </Link>
              <Link
                href="/doctors"
                className="rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-slate-900"
              >
                Meet Our Doctors
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
