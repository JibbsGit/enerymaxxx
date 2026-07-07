import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { ContactForm } from './ContactForm'
import { site } from '../data/site'

const cards = [
  {
    icon: Phone,
    title: 'Phone',
    lines: site.phones,
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [site.email],
  },
  {
    icon: MapPin,
    title: 'Office Address',
    lines: [site.address],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: site.hours.split(' · '),
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative bg-soft-gray py-24 dark:bg-[#141b18]">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's be a solution to your clean energy and mordern agro tech"
          description="Reach out for a free consultation. Our team responds quickly and ready to help."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-white/5"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald to-deep-green text-white shadow-md shadow-emerald/30">
                <card.icon size={20} />
              </div>
              <h3 className="mt-4 font-heading text-sm font-bold text-charcoal dark:text-white">{card.title}</h3>
              <div className="mt-1.5 space-y-0.5">
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-charcoal/60 dark:text-white/60">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-3xl shadow-xl shadow-charcoal/10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative hidden min-h-[520px] lg:block"
          >
            <img
              src="/images/placeholders/solar-installation.jpg"
              alt="EnergyMaxx consultant on site with a client"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="font-heading text-xl font-bold text-white">Talk to a Specialist</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Our engineers and agribusiness consultants work with you from first call to final handover.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-8 dark:bg-white/5"
          >
            <h3 className="font-heading text-xl font-bold text-charcoal dark:text-white">Request Consultation</h3>
            <p className="mt-1 text-sm text-charcoal/60 dark:text-white/60">
              Fill out the form and our team will get back to you within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-3xl shadow-md shadow-charcoal/5"
        >
          <iframe
            title="EnergyMaxx Solutions Office Location"
            src="https://www.google.com/maps?q=Lagos%2C%20Nigeria&output=embed"
            className="h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </Container>
    </section>
  )
}
