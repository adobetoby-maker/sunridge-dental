'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqItem { question: string; answer: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="divide-y divide-slate-200">
      {items.map((item, i) => (
        <div key={item.question}>
          <button
            className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-slate-900 hover:text-[#0EA5E9] transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {item.question}
            <span className="ml-4 text-xl font-light">{open === i ? '−' : '+'}</span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-slate-600">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
