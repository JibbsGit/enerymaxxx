import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { galleryImages } from '../data/gallery'

const AUTO_ADVANCE_MS = 5000

export function Gallery() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % galleryImages.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [paused])

  const goTo = (i: number) => setIndex((i + galleryImages.length) % galleryImages.length)

  return (
    <section id="gallery" className="relative bg-white py-24 dark:bg-charcoal">
      <Container>
        <SectionHeading
          eyebrow="In The Field"
          title="Project Gallery"
          description="A closer look at our installations, equipment, and work on the ground."
        />

        <div
          className="relative mx-auto mt-16 aspect-4/3 max-w-4xl overflow-hidden rounded-3xl shadow-xl shadow-charcoal/10 sm:aspect-16/9"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={galleryImages[index].src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img
                src={galleryImages[index].src}
                alt={galleryImages[index].caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-heading text-lg font-semibold text-white sm:text-xl">
                {galleryImages[index].caption}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md transition-transform hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next image"
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md transition-transform hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {galleryImages.map((image, i) => (
            <button
              key={image.src}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-emerald' : 'w-2.5 bg-charcoal/20 dark:bg-white/20'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
