import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { LinkButton } from './ui/Button'
import { divisions } from '../data/divisions'

export function Divisions() {
  return (
    <section id="divisions" className="relative bg-white py-24 dark:bg-charcoal">
      <Container>
        <SectionHeading
          eyebrow="Two Divisions, One Mission"
          title="Powering Biogas. Growing Agribusiness."
          description="EnergyMaxx operates at the intersection of biogas power and sustainable agriculture."
        />
      </Container>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2">
        {divisions.map((division, i) => (
          <motion.div
            key={division.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group relative flex min-h-[70vh] items-end overflow-hidden"
          >
            <img
              src={division.image}
              alt={division.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/10" />

            <div className="relative z-10 w-full p-8 sm:p-12">
              <div className="max-w-md rounded-3xl border border-white/15 bg-charcoal/40 p-6 backdrop-blur-md sm:p-8">
                <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">{division.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">{division.description}</p>
                <LinkButton href="#services" variant="accent" className="mt-6">
                  {division.cta} <ArrowRight size={16} />
                </LinkButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
