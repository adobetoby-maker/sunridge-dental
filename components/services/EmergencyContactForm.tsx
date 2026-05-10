'use client'
import { useState } from 'react'

export default function EmergencyContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    description: '',
    bestTime: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/emergency-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-sky-50 border border-[#0EA5E9] p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Received</h3>
        <p className="text-slate-600">
          Our team will call you back within 1 hour. If this is a life-threatening emergency, please call 911.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
            Name <span className="text-[#0EA5E9]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9]"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">
            Phone <span className="text-[#0EA5E9]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9]"
            placeholder="(208) 555-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-1">
          Brief description of emergency <span className="text-[#0EA5E9]">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          required
          value={form.description}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9]"
          placeholder="Describe your dental emergency..."
        />
      </div>

      <div>
        <label htmlFor="bestTime" className="block text-sm font-semibold text-slate-700 mb-1">
          Best time to reach you
        </label>
        <input
          id="bestTime"
          name="bestTime"
          type="text"
          value={form.bestTime}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9]"
          placeholder="e.g. Mornings, after 2pm, anytime"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-orange-600 bg-orange-50 border border-orange-200 rounded-lg px-4 py-3">
          Something went wrong. Please call us directly at{' '}
          <a href="tel:+12085550247" className="font-semibold underline">(208) 555-0247</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-lg px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: '#0EA5E9' }}
      >
        {status === 'loading' ? 'Sending...' : 'Send Emergency Request'}
      </button>
    </form>
  )
}
