import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { circularStages } from '../data/circularEconomy'

export function CircularEconomy() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-charcoal">
      <Container>
        <SectionHeading
          eyebrow="The Bigger Picture"
          title="Our Circular Economy"
          description="Every division feeds the next: waste becomes energy, energy grows food, and food strengthens communities."
        />

        <div className="mt-16 flex flex-wrap items-start justify-center gap-x-1 gap-y-10">
          {circularStages.map((stage, i) => (
            <div key={stage.title} className="flex items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.1 }}
                className="flex w-28 flex-col items-center text-center"
              >
                <div className="relative">
                  <div className="h-24 w-24 overflow-hidden rounded-full shadow-lg shadow-charcoal/20 ring-4 ring-emerald/15">
                    <img src={stage.image} alt={stage.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange text-xs font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                </div>
                <p className="mt-3 text-xs font-semibold leading-snug text-charcoal dark:text-white">{stage.title}</p>
              </motion.div>

              {i < circularStages.length - 1 && (
                <ArrowRight size={20} className="mt-10 hidden shrink-0 text-emerald/50 sm:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
