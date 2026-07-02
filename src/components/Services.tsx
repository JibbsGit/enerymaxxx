import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { serviceCategories } from '../data/services'

export function Services() {
  return (
    <section id="services" className="relative bg-soft-gray py-24 dark:bg-[#141b18]">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          description="Comprehensive clean-energy solutions engineered for homes, businesses, and communities."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {serviceCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-md shadow-charcoal/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald/20 dark:bg-white/5"
            >
              <div
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${category.accent} opacity-10 transition-transform duration-500 group-hover:scale-150`}
              />

              <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} text-white shadow-lg`}>
                <span className="font-heading text-xl font-bold">{i + 1}</span>
              </div>

              <h3 className="relative mt-6 font-heading text-xl font-bold text-charcoal dark:text-white">{category.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">{category.description}</p>

              <ul className="relative mt-6 space-y-3">
                {category.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm text-charcoal/80 dark:text-white/80">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald/10 text-deep-green dark:bg-emerald/15 dark:text-emerald">
                      <item.icon size={16} />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-deep-green transition-colors group-hover:text-emerald dark:text-emerald"
              >
                Request this service
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
