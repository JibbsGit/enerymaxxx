import { motion } from 'framer-motion'
import { Lightbulb, Leaf, ShieldCheck, Cpu, Smile } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'

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
        <SectionHeading
          eyebrow="About EnergyMaxx"
          title="A Trusted Partner in Clean, Reliable Energy"
          description="EnergyMaxx Solutions Limited is a renewable energy company dedicated to providing environmentally friendly energy solutions — from solar systems and biodigesters to clean gas plants — engineered for performance, safety, and long-term sustainability."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-charcoal/5 bg-soft-gray p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald/30 hover:shadow-xl hover:shadow-emerald/10 dark:border-white/5 dark:bg-white/5"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald to-deep-green text-white shadow-md shadow-emerald/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <pillar.icon size={24} />
              </div>
              <h3 className="mt-5 font-heading text-base font-semibold text-charcoal dark:text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
