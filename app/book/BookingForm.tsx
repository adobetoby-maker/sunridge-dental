'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1
  patientType: 'New Patient' | 'Existing Patient' | ''
  serviceType: string
  // Step 2
  preferredDate: string
  preferredTime: string
  doctorPreference: string
  insuranceCarrier: string
  // Step 3
  patientName: string
  dob: string
  phone: string
  email: string
  notes: string
}

const initialForm: FormData = {
  patientType: '',
  serviceType: '',
  preferredDate: '',
  preferredTime: '',
  doctorPreference: '',
  insuranceCarrier: '',
  patientName: '',
  dob: '',
  phone: '',
  email: '',
  notes: '',
}

const SERVICE_OPTIONS = [
  'Cleaning & Exam',
  'Cosmetic Consultation',
  'Orthodontic Consultation (Invisalign)',
  'Emergency Appointment',
  'Pediatric Appointment',
  'Other',
]

const DOCTOR_OPTIONS = [
  { value: '', label: 'No Preference — Anyone' },
  { value: 'Dr. Rachel Kim', label: 'Dr. Rachel Kim — General & Cosmetic' },
  { value: 'Dr. Marcus Webb', label: 'Dr. Marcus Webb — General & Invisalign' },
  { value: 'Dr. Sofia Reyes', label: 'Dr. Sofia Reyes — Pediatric & General' },
]

const TODAY = new Date().toISOString().split('T')[0]

// ─── Animations ──────────────────────────────────────────────────────────────

const slideVariants = {
  enterRight: { x: 60, opacity: 0 },
  enterLeft: { x: -60, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exitLeft: { x: -60, opacity: 0 },
  exitRight: { x: 60, opacity: 0 },
}

// ─── Progress Indicator ───────────────────────────────────────────────────────

function ProgressIndicator({ step }: { step: number }) {
  const steps = ['Service', 'Preferences', 'Your Info']
  return (
    <div className="flex items-center justify-center mb-8 gap-0">
      {steps.map((label, idx) => {
        const num = idx + 1
        const isComplete = step > num
        const isActive = step === num
        return (
          <div key={label} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                  isComplete
                    ? 'bg-[#0D9488] text-white'
                    : isActive
                    ? 'bg-[#0EA5E9] text-white'
                    : 'bg-slate-200 text-slate-400'
                }`}
              >
                {isComplete ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  num
                )}
              </div>
              <span
                className={`mt-1 text-xs font-semibold transition-colors duration-300 ${
                  isActive ? 'text-[#0EA5E9]' : isComplete ? 'text-[#0D9488]' : 'text-slate-400'
                }`}
              >
                {label}
              </span>
            </div>
            {/* Connector */}
            {idx < steps.length - 1 && (
              <div
                className={`h-0.5 w-16 mx-2 mb-5 transition-colors duration-300 ${
                  step > num ? 'bg-[#0D9488]' : 'bg-slate-200'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Input / Label helpers ────────────────────────────────────────────────────

const inputClass =
  'border border-slate-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] text-slate-800 bg-white transition'

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-semibold text-slate-700 mb-1">{children}</label>
}

// ─── Step 1: Patient Type & Service ──────────────────────────────────────────

function Step1({
  form,
  setForm,
  onNext,
}: {
  form: FormData
  setForm: (f: FormData) => void
  onNext: () => void
}) {
  const canProceed = form.patientType !== '' && form.serviceType !== ''

  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-800 mb-6">Step 1 of 3 — Service</h2>

      {/* Patient Type */}
      <div className="mb-6">
        <Label>I am a...</Label>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {(['New Patient', 'Existing Patient'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setForm({ ...form, patientType: type })}
              className={`border-2 rounded-xl p-5 text-left transition-all duration-200 ${
                form.patientType === type
                  ? 'border-[#0EA5E9] bg-sky-50 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                    form.patientType === type ? 'border-[#0EA5E9]' : 'border-slate-300'
                  }`}
                >
                  {form.patientType === type && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]" />
                  )}
                </span>
                <span
                  className={`font-semibold text-base ${
                    form.patientType === type ? 'text-[#0EA5E9]' : 'text-slate-700'
                  }`}
                >
                  {type}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-400 pl-8">
                {type === 'New Patient'
                  ? 'First visit to Sunridge Dental'
                  : 'Already a patient with us'}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Service Type */}
      <div className="mb-8">
        <Label>What type of appointment?</Label>
        <select
          value={form.serviceType}
          onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className="bg-[#0EA5E9] text-white rounded-lg px-6 py-3 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-500 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

// ─── Step 2: Appointment Preferences ─────────────────────────────────────────

function Step2({
  form,
  setForm,
  onNext,
  onBack,
}: {
  form: FormData
  setForm: (f: FormData) => void
  onNext: () => void
  onBack: () => void
}) {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-800 mb-6">Step 2 of 3 — Preferences</h2>

      {/* Preferred Date */}
      <div className="mb-5">
        <Label>Preferred Date</Label>
        <input
          type="date"
          min={TODAY}
          value={form.preferredDate}
          onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
          className={inputClass}
        />
      </div>

      {/* Preferred Time */}
      <div className="mb-5">
        <Label>Preferred Time</Label>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {[
            { value: 'Morning', label: 'Morning', sub: '8AM – 12PM' },
            { value: 'Afternoon', label: 'Afternoon', sub: '12PM – 5PM' },
          ].map(({ value, label, sub }) => (
            <button
              key={value}
              type="button"
              onClick={() => setForm({ ...form, preferredTime: value })}
              className={`border-2 rounded-xl p-4 text-left transition-all duration-200 ${
                form.preferredTime === value
                  ? 'border-[#0EA5E9] bg-sky-50 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                    form.preferredTime === value ? 'border-[#0EA5E9]' : 'border-slate-300'
                  }`}
                >
                  {form.preferredTime === value && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]" />
                  )}
                </span>
                <div>
                  <span
                    className={`font-semibold text-sm ${
                      form.preferredTime === value ? 'text-[#0EA5E9]' : 'text-slate-700'
                    }`}
                  >
                    {label}
                  </span>
                  <p className="text-xs text-slate-400">{sub}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Doctor Preference */}
      <div className="mb-5">
        <Label>Doctor Preference</Label>
        <select
          value={form.doctorPreference}
          onChange={(e) => setForm({ ...form, doctorPreference: e.target.value })}
          className={inputClass}
        >
          {DOCTOR_OPTIONS.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
      </div>

      {/* Insurance Carrier */}
      <div className="mb-8">
        <Label>Insurance Carrier (optional)</Label>
        <input
          type="text"
          value={form.insuranceCarrier}
          onChange={(e) => setForm({ ...form, insuranceCarrier: e.target.value })}
          placeholder="Delta Dental, Blue Cross, Cigna, etc. (leave blank if uninsured)"
          className={inputClass}
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="border border-slate-300 text-slate-600 rounded-lg px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-[#0EA5E9] text-white rounded-lg px-6 py-3 font-semibold hover:bg-sky-500 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

// ─── Step 3: Your Information ─────────────────────────────────────────────────

function Step3({
  form,
  setForm,
  onBack,
  onSubmit,
  submitting,
}: {
  form: FormData
  setForm: (f: FormData) => void
  onBack: () => void
  onSubmit: () => void
  submitting: boolean
}) {
  const canSubmit = form.patientName.trim() && form.phone.trim() && form.email.trim()

  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-800 mb-6">Step 3 of 3 — Your Info</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Full Name */}
        <div className="sm:col-span-2">
          <Label>Full Name *</Label>
          <input
            type="text"
            required
            value={form.patientName}
            onChange={(e) => setForm({ ...form, patientName: e.target.value })}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>

        {/* Date of Birth */}
        <div>
          <Label>Date of Birth</Label>
          <input
            type="date"
            value={form.dob}
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <Label>Phone *</Label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(208) 555-0100"
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <Label>Email *</Label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Notes */}
      <div className="mb-6">
        <Label>Additional Notes (optional)</Label>
        <textarea
          rows={4}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Tell us anything that might help us prepare for your visit..."
          className={inputClass}
        />
      </div>

      {/* HIPAA Disclaimer */}
      <p className="text-xs text-slate-400 mb-6 leading-relaxed">
        By submitting this form, you understand that this does not create a patient-provider
        relationship. Your information is transmitted securely. We&apos;ll call you within 1
        business day to confirm your appointment.
      </p>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={submitting}
          className="border border-slate-300 text-slate-600 rounded-lg px-6 py-3 font-semibold hover:bg-slate-50 transition-colors disabled:opacity-40"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!canSubmit || submitting}
          className="bg-[#0EA5E9] text-white rounded-lg px-6 py-3 font-semibold hover:bg-sky-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {submitting ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Submitting...
            </>
          ) : (
            'Request Appointment'
          )}
        </button>
      </div>
    </div>
  )
}

// ─── Success State ────────────────────────────────────────────────────────────

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-10"
    >
      {/* Checkmark */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-[#0D9488]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
        Appointment Request Received!
      </h2>
      <p className="text-slate-500 max-w-md mx-auto mb-8 text-base leading-relaxed">
        We&apos;ll call you within 1 business day to confirm your appointment. If this is a dental
        emergency, please call us directly.
      </p>

      <a
        href="tel:+12085550247"
        className="inline-flex items-center gap-2 bg-[#0D9488] text-white rounded-xl px-8 py-4 font-bold text-lg hover:bg-teal-700 transition-colors mb-8"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"
          />
        </svg>
        (208) 555-0247
      </a>

      <div className="mt-2">
        <Link
          href="/"
          className="text-[#0EA5E9] hover:underline font-semibold text-sm"
        >
          ← Back to Home
        </Link>
      </div>
    </motion.div>
  )
}

// ─── Main BookingForm ─────────────────────────────────────────────────────────

export default function BookingForm() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState<'forward' | 'back'>('forward')
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function goNext() {
    setDirection('forward')
    setStep((s) => s + 1)
  }

  function goBack() {
    setDirection('back')
    setStep((s) => s - 1)
  }

  async function handleSubmit() {
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientType: form.patientType,
          serviceType: form.serviceType,
          preferredDate: form.preferredDate,
          preferredTime: form.preferredTime,
          doctorPreference: form.doctorPreference,
          insuranceCarrier: form.insuranceCarrier,
          patientName: form.patientName,
          dob: form.dob,
          phone: form.phone,
          email: form.email,
          notes: form.notes,
        }),
      })
      const data = (await res.json()) as { success?: boolean; error?: string }
      if (!res.ok || !data.success) {
        setError(data.error ?? 'Something went wrong. Please call us directly.')
      } else {
        setSubmitted(true)
      }
    } catch {
      setError('Network error. Please call us directly at (208) 555-0247.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <SuccessState />
      </div>
    )
  }

  const enterVariant = direction === 'forward' ? 'enterRight' : 'enterLeft'
  const exitVariant = direction === 'forward' ? 'exitLeft' : 'exitRight'

  return (
    <div>
      <ProgressIndicator step={step} />

      <div className="bg-white rounded-2xl shadow-sm p-8 overflow-hidden">
        {error && (
          <div className="mb-5 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            {error}
          </div>
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            variants={slideVariants}
            initial={enterVariant}
            animate="center"
            exit={exitVariant}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            {step === 1 && (
              <Step1 form={form} setForm={setForm} onNext={goNext} />
            )}
            {step === 2 && (
              <Step2 form={form} setForm={setForm} onNext={goNext} onBack={goBack} />
            )}
            {step === 3 && (
              <Step3
                form={form}
                setForm={setForm}
                onBack={goBack}
                onSubmit={handleSubmit}
                submitting={submitting}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
