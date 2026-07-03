import { motion } from 'framer-motion'
import { Lightbulb, Leaf, ShieldCheck, Cpu, Smile } from 'lucide-react'
import { Container } from './ui/Container'

const pillars = [
  { title: 'Innovation', description: 'Forward-thinking engineering that keeps our clients ahead of the curve.', icon: Lightbulb },
  { title: 'Sustainability', description: 'Every solution is designed to protect the environment for generations to come.', icon: Leaf },
  { title: 'Reliability', description: 'Dependable systems, backed by rigorous testing and quality assurance.', icon: ShieldCheck },
  { title: 'Clean Technology', description: 'We deploy proven, efficient technology to maximize performance and savings.', icon: Cpu },
  { title: 'Customer Satisfaction', description: 'Our clients remain at the center of every decision we make.', icon: Smile },
]

export function About() {
  return (
    <section id="about" className="relative bg-white py-24 dark:bg-charcoal">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-charcoal/20">
              <img
                src="/images/placeholders/solar-installation.jpg"
                alt="EnergyMaxx engineers installing a solar system"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-2xl bg-white p-5 shadow-xl shadow-charcoal/20 sm:block dark:bg-charcoal dark:shadow-black/40">
              <p className="font-heading text-3xl font-bold text-orange">7+</p>
              <p className="mt-1 text-sm text-charcoal/60 dark:text-white/60">Divisions delivering clean energy and sustainable agribusiness</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block rounded-full bg-emerald/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-deep-green uppercase dark:bg-emerald/15 dark:text-emerald">
              About EnergyMaxx
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl dark:text-white">
              A Trusted Partner in Clean Energy &amp; Sustainable Agriculture
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/60 dark:text-white/60">
              EnergyMaxx Solutions Limited is a renewable energy and agribusiness company dedicated to environmentally
              friendly solutions — from solar systems and biodigesters to clean gas plants, snail farming, mushroom
              cultivation, and honey production — engineered for performance, safety, and long-term sustainability.
            </p>

            <div className="mt-8 space-y-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald to-deep-green text-white shadow-md shadow-emerald/30">
                    <pillar.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-charcoal dark:text-white">{pillar.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
