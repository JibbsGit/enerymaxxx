import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'
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
          description="A glimpse into the solar installations, biodigester plants, and gas systems we've delivered."
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
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="w-fit rounded-full bg-emerald/90 px-3 py-1 text-xs font-semibold text-white">
                  {project.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-white">{project.title}</h3>
              </div>
              <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-charcoal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ZoomIn size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
