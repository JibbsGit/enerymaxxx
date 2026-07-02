import { motion } from 'framer-motion'
import { Sun, Wind, Flame, Leaf, Zap, Globe2, ArrowRight, PhoneCall } from 'lucide-react'
import { Container } from './ui/Container'
import { LinkButton } from './ui/Button'

const floaters = [
  { icon: Sun, className: 'left-[6%] top-[18%]', animation: 'animate-float', size: 46 },
  { icon: Wind, className: 'right-[10%] top-[14%]', animation: 'animate-float-delayed', size: 40 },
  { icon: Flame, className: 'left-[12%] bottom-[20%]', animation: 'animate-float-slow', size: 38 },
  { icon: Leaf, className: 'right-[16%] bottom-[16%]', animation: 'animate-float', size: 42 },
  { icon: Zap, className: 'left-[45%] top-[8%]', animation: 'animate-float-delayed', size: 34 },
  { icon: Globe2, className: 'right-[42%] bottom-[10%]', animation: 'animate-float-slow', size: 44 },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-charcoal via-deep-green to-charcoal pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(46,204,113,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(244,180,0,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {floaters.map(({ icon: Icon, className, animation, size }, i) => (
        <div
          key={i}
          className={`absolute hidden items-center justify-center rounded-2xl glass p-3 text-emerald shadow-lg shadow-emerald/10 md:flex ${className} ${animation}`}
        >
          <Icon size={size} strokeWidth={1.6} />
        </div>
      ))}

      <Container className="relative z-10 py-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald uppercase"
        >
          <Leaf size={14} /> Renewable Energy · Biodigesters · Clean Gas
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Powering a Cleaner Tomorrow Through <span className="text-emerald">Sustainable Energy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          EnergyMaxx Solutions Limited provides innovative renewable energy systems, biodigesters, and clean gas
          plant solutions that help businesses and communities reduce costs while protecting the environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <LinkButton href="#contact" variant="primary">
            Get a Free Consultation <ArrowRight size={16} />
          </LinkButton>
          <LinkButton href="#contact" variant="outline">
            <PhoneCall size={16} /> Contact Us
          </LinkButton>
        </motion.div>
      </Container>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-9 w-6 rounded-full border-2 border-white/30 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-emerald" />
        </motion.div>
      </div>
    </section>
  )
}
