import { motion } from 'framer-motion'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { stats } from '../data/stats'
import { useCountUp } from '../hooks/useCountUp'

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const { ref, value } = useCountUp(stat.value)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl glass p-6 text-center"
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/15 text-emerald">
        <stat.icon size={22} />
      </div>
      <div className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
        {value}
        <span className="text-emerald">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-white/60">{stat.label}</p>
    </motion.div>
  )
}

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-deep-green/90 to-charcoal py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(46,204,113,0.2),transparent_50%)]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose EnergyMaxx"
          title="Trusted for Performance, Built for the Future"
          description="Our track record speaks for itself — from certified engineering to responsive support, every metric reflects our commitment to excellence."
          light
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
