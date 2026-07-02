import { motion } from 'framer-motion'

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-2xl text-center"
    >
      <span
        className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase ${
          light ? 'bg-white/10 text-emerald' : 'bg-emerald/10 text-deep-green dark:bg-emerald/15 dark:text-emerald'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-charcoal dark:text-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-charcoal/60 dark:text-white/60'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
