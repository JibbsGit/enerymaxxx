import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sun, Wind, Flame, Leaf, Zap, Globe2, ArrowRight, PhoneCall } from 'lucide-react'
import { Container } from './ui/Container'
import { LinkButton } from './ui/Button'

const heroImages = [
  '/images/projects/utility-scale-solar-farm.jpg',
  '/images/projects/biodigester-construction-1.jpg',
  '/images/placeholders/greenhouse-farm.jpg',
  '/images/placeholders/aerial-solar-farmland.jpg',
  '/images/projects/rooftop-solar-array.jpg',
]

const floaters = [
  { icon: Sun, className: 'left-[6%] top-[18%]', animation: 'animate-float', size: 46 },
  { icon: Wind, className: 'right-[10%] top-[14%]', animation: 'animate-float-delayed', size: 40 },
  { icon: Flame, className: 'left-[12%] bottom-[20%]', animation: 'animate-float-slow', size: 38 },
  { icon: Leaf, className: 'right-[16%] bottom-[16%]', animation: 'animate-float', size: 42 },
  { icon: Zap, className: 'left-[45%] top-[8%]', animation: 'animate-float-delayed', size: 34 },
  { icon: Globe2, className: 'right-[42%] bottom-[10%]', animation: 'animate-float-slow', size: 44 },
]

const particles = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  delay: `${(i * 1.3) % 12}s`,
  duration: `${10 + (i % 5)}s`,
  size: 3 + (i % 4),
}))

export function Hero() {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((i) => (i + 1) % heroImages.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal pt-24"
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={imageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div
              className="animate-kenburns h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[imageIndex]})` }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(46,204,113,0.25),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.15),transparent_45%)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="animate-drift absolute bottom-0 rounded-full bg-emerald/60 blur-[1px]"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

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
          <Leaf size={14} /> Renewable Energy · Biodigesters · Clean Gas · Agribusiness
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Transforming Africa Through <span className="text-emerald">Sustainable Energy</span> &amp;{' '}
          <span className="text-orange">Agriculture</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          EnergyMaxx Solutions Limited delivers renewable energy, biodigesters, clean gas plants, and sustainable
          agribusiness — from solar farms to snail farms — engineered for performance and lasting impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <LinkButton href="#contact" variant="accent">
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
