import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="relative bg-soft-gray py-24 dark:bg-[#141b18]">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          description="Seven divisions, one mission — sustainable energy and agriculture engineered for homes, businesses, and communities."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.a
              key={service.id}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-4/5 overflow-hidden rounded-3xl shadow-md shadow-charcoal/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald/20"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block rounded-full bg-orange/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {service.division}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/75">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition-transform duration-300 group-hover:translate-x-1">
                  Request this service <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  )
}
