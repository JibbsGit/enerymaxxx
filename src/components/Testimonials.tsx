import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { testimonials } from '../data/testimonials'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const current = testimonials[index]

  return (
    <section id="testimonials" className="relative bg-white py-24 dark:bg-charcoal">
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          description="Real feedback from the businesses and communities we've powered."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald dark:bg-emerald/15">
            <Quote size={26} />
          </div>

          <div className="relative mt-6 min-h-64 sm:min-h-48">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="text-lg font-medium leading-relaxed text-charcoal/80 sm:text-xl dark:text-white/80">
                  "{current.quote}"
                </p>
                <div className="mt-6 flex flex-col items-center">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="h-14 w-14 rounded-full object-cover shadow-md ring-4 ring-emerald/15"
                  />
                  <p className="mt-3 font-heading font-bold text-charcoal dark:text-white">{current.name}</p>
                  <p className="text-sm text-emerald">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition-colors hover:border-emerald hover:text-emerald dark:border-white/15 dark:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-emerald' : 'w-2 bg-charcoal/20 dark:bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition-colors hover:border-emerald hover:text-emerald dark:border-white/15 dark:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
