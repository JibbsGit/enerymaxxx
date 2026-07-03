import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="relative bg-soft-gray py-24 dark:bg-[#141b18]">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects"
          description="A glimpse into the biodigester plants, biogas systems, agribusiness ventures, and solar installations we've delivered."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-md shadow-charcoal/10"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="w-fit rounded-full bg-emerald/90 px-3 py-1 text-xs font-semibold text-white">
                  {project.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-white">{project.title}</h3>
                <span className="mt-1 flex items-center gap-1 text-xs text-white/70">
                  <MapPin size={12} /> {project.location}
                </span>
                <a
                  href="#contact"
                  className="mt-3 flex w-fit items-center gap-1 text-sm font-semibold text-orange opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  View Details <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
