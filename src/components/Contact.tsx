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
          title="Let's Build Your Clean Energy Solution"
          description="Reach out for a free consultation — our team responds quickly and is ready to help."
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

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-6 shadow-md shadow-charcoal/5 sm:p-8 lg:col-span-3 dark:bg-white/5"
          >
            <h3 className="font-heading text-xl font-bold text-charcoal dark:text-white">Request Consultation</h3>
            <p className="mt-1 text-sm text-charcoal/60 dark:text-white/60">
              Fill out the form and our team will get back to you within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-md shadow-charcoal/5 lg:col-span-2"
          >
            <iframe
              title="EnergyMaxx Solutions Office Location"
              src="https://www.google.com/maps?q=Lekki%20Lagos%20Nigeria&output=embed"
              className="h-80 w-full border-0 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
