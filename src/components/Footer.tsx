import { useState } from 'react'
import type { FormEvent } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Container } from './ui/Container'
import { Button } from './ui/Button'
import { navLinks, site } from '../data/site'
import { serviceDivisions } from '../data/services'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './ui/SocialIcons'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name: 'Newsletter Signup',
          company_name: 'N/A',
          email,
          phone: 'N/A',
          service: 'Newsletter',
          message: `New newsletter subscription request from ${email}.`,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      setStatus('sent')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return <p className="text-sm font-medium text-emerald">Thanks for subscribing. We'll be in touch!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-emerald sm:w-72"
      />
      <Button type="submit" variant="accent" disabled={status === 'sending'} className="shrink-0">
        {status === 'sending' ? 'Subscribing...' : 'Subscribe'} <Send size={16} />
      </Button>
      {status === 'error' && <p className="text-xs text-red-400">Something went wrong. Please try again.</p>}
    </form>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal pt-16 pb-8 text-white/70">
      <img
        src="/images/placeholders/aerial-solar-farmland.jpg"
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-center">
          <div>
            <h4 className="font-heading text-lg font-bold text-white">Stay Updated</h4>
            <p className="mt-1 text-sm text-white/60">
              Get news on our latest energy and agribusiness projects. No spam, ever.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center">
              <img
                src="/logo.png"
                alt="EnergyMaxx Solutions Limited"
                className="h-32 w-auto"
                width={1218}
                height={360}
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Powering a cleaner tomorrow through biodigesters, biogas power, sustainable agribusiness, and
              renewable energy.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: FacebookIcon, href: site.social.facebook },
                { icon: TwitterIcon, href: site.social.twitter },
                { icon: InstagramIcon, href: site.social.instagram },
                { icon: LinkedinIcon, href: site.social.linkedin },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-emerald hover:text-emerald"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-emerald">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceDivisions.map((division) => (
                <li key={division}>
                  <a href="#services" className="transition-colors hover:text-emerald">
                    {division}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-emerald" />
                <span>
                  {site.phones.map((phone) => (
                    <span key={phone} className="block">
                      {phone}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-emerald" />
                {site.email}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-emerald" />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>&copy; 2026 {site.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-emerald">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-emerald">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
