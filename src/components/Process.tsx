import { motion } from 'framer-motion'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { processSteps } from '../data/process'

export function Process() {
  return (
    <section id="process" className="relative bg-white py-24 dark:bg-charcoal">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="Our Process"
          description="A clear, structured path from first conversation to ongoing support."
        />

        <div className="relative mt-16 space-y-6">
          <div className="absolute top-2 bottom-2 left-6 w-px bg-gradient-to-b from-emerald via-emerald/40 to-transparent" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex items-start gap-6 pl-0"
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald to-deep-green text-white shadow-lg shadow-emerald/30">
                <step.icon size={20} />
              </div>

              <div className="flex-1 rounded-2xl border border-charcoal/5 bg-soft-gray p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/5 dark:bg-white/5">
                <span className="font-heading text-xs font-bold tracking-wide text-emerald uppercase">
                  Step {step.step}
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-charcoal dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
