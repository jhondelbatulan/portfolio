import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Calendar, User, ChevronRight } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'
import GithubRepos from '@/components/GithubRepos'
import { projects } from '@/data/portfolio'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group rounded-2xl bg-dark-800/50 border border-dark-700/50 overflow-hidden card-hover"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-600/20 to-primary-900/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-gradient">GIS</span>
            </div>
            <p className="text-xs text-dark-400">Village Management</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1.5 text-xs text-dark-500">
            <Calendar size={12} />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-dark-500">
            <User size={12} />
            <span>{project.role}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-dark-100 mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
          {project.title}
        </h3>

        <p className="text-sm text-dark-400 mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mb-4">
          <p className="text-xs text-dark-500 mb-2 uppercase tracking-wider">Key Features</p>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs text-dark-400">
                <ChevronRight size={12} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-xs text-dark-500 pl-5">
                +{project.features.length - 3} more
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-dark-700 hover:bg-dark-600 text-dark-200 rounded-lg border border-dark-600 hover:border-dark-500 transition-all"
          >
            <GithubIcon size={16} />
            Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary-600" />
            <span className="text-primary-400 text-sm font-semibold uppercase tracking-wider">
              Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mb-12">
            A showcase of projects I&apos;ve worked on, demonstrating my skills in full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <GithubRepos />
      </div>
    </section>
  )
}
