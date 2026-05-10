'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const photos = [
  {
    src: 'https://images.unsplash.com/e7MJLM5VGjY?w=1200&auto=format&fit=crop',
    alt: 'Modern dental treatment room at Sunridge Dental',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&auto=format&fit=crop',
    alt: 'Dentist and dental assistant at work',
  },
  {
    src: 'https://images.unsplash.com/4_mJ1TbMK8A?w=1200&auto=format&fit=crop',
    alt: 'Happy smiling family — patient success story',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const photoVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function OfficePhotos() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Our Modern, Comfortable Office</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.src}
              variants={photoVariants}
              className="relative h-64 rounded-xl overflow-hidden"
            >
              <Image
                fill
                className="object-cover"
                src={photo.src}
                alt={photo.alt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
