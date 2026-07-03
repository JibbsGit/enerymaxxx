import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Button } from './ui/Button'

interface FormData {
  fullName: string
  companyName: string
  email: string
  phone: string
  service: string
  message: string
  agree: boolean
}

const initialData: FormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  agree: false,
}

const serviceOptions = ['Renewable Energy', 'Biodigester', 'Clean Gas Plant', 'Consultation', 'Other']

const RECIPIENT_EMAIL = 'energymaxxsolutionslmt@gmail.com'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isValidPhone(value: string) {
  return /^[+\d][\d\s-]{6,}$/.test(value)
}

export function ContactForm() {
  const [data, setData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {}
    if (!data.fullName.trim()) next.fullName = 'Full name is required.'
    if (!data.email.trim()) next.email = 'Email address is required.'
    else if (!isValidEmail(data.email)) next.email = 'Enter a valid email address.'
    if (!data.phone.trim()) next.phone = 'Phone number is required.'
    else if (!isValidPhone(data.phone)) next.phone = 'Enter a valid phone number.'
    if (!data.service) next.service = 'Please select a service.'
    if (!data.message.trim()) next.message = 'Please tell us a bit about your project.'
    if (!data.agree) next.agree = 'Please agree to be contacted.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)
    setSendError(false)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name: data.fullName,
          company_name: data.companyName || 'N/A',
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      setSubmitted(true)
      setData(initialData)
    } catch {
      setSendError(true)
    } finally {
      setSending(false)
    }
  }

  const field =
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-emerald dark:bg-white/5 dark:text-white dark:placeholder:text-white/30'

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl bg-emerald/5 p-10 text-center dark:bg-emerald/10"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-white">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="mt-6 font-heading text-xl font-bold text-charcoal dark:text-white">Request sent!</h3>
        <p className="mt-2 max-w-sm text-sm text-charcoal/60 dark:text-white/60">
          Thanks for reaching out. Our team has received your request and will get back to you shortly.
        </p>
        <Button variant="outlineDark" className="mt-6" onClick={() => setSubmitted(false)}>
          Send another request
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-sm font-medium text-charcoal dark:text-white">Full Name *</label>
        <input
          type="text"
          className={field}
          placeholder="John Doe"
          value={data.fullName}
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
      </div>

      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-sm font-medium text-charcoal dark:text-white">Company Name</label>
        <input
          type="text"
          className={field}
          placeholder="Company Ltd."
          value={data.companyName}
          onChange={(e) => setData({ ...data, companyName: e.target.value })}
        />
      </div>

      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-sm font-medium text-charcoal dark:text-white">Email Address *</label>
        <input
          type="email"
          className={field}
          placeholder="you@example.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-sm font-medium text-charcoal dark:text-white">Phone Number *</label>
        <input
          type="tel"
          className={field}
          placeholder="+234 700 000 0000"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-charcoal dark:text-white">Service Interested In *</label>
        <select
          className={field}
          value={data.service}
          onChange={(e) => setData({ ...data, service: e.target.value })}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-charcoal dark:text-white">Message *</label>
        <textarea
          rows={4}
          className={field}
          placeholder="Tell us about your project..."
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-2.5 text-sm text-charcoal/70 dark:text-white/70">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-charcoal/20 text-emerald accent-emerald"
            checked={data.agree}
            onChange={(e) => setData({ ...data, agree: e.target.checked })}
          />
          I agree to be contacted.
        </label>
        {errors.agree && <p className="mt-1 text-xs text-red-500">{errors.agree}</p>}
      </div>

      <div className="sm:col-span-2 pb-16 lg:pb-0">
        {sendError && (
          <p className="mb-3 text-sm text-red-500">
            Something went wrong sending your request. Please try again, or email us directly at{' '}
            <a href={`mailto:${RECIPIENT_EMAIL}`} className="underline">
              {RECIPIENT_EMAIL}
            </a>
            .
          </p>
        )}
        <Button type="submit" variant="primary" className="w-full" disabled={sending}>
          {sending ? 'Sending...' : 'Request Consultation'} <Send size={16} />
        </Button>
      </div>
    </form>
  )
}
