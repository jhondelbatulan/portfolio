import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code2,
  Layers,
  Database,
  Wrench,
} from 'lucide-react'
import { skills } from '@/data/portfolio'
import type { SkillCategory } from '@/data/portfolio'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2,
  Layers,
  Database,
  Wrench,
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-dark-200">{name}</span>
        <span className="text-xs text-dark-500 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
        />
      </div>
    </div>
  )
}

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const IconComponent = iconMap[category.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 card-hover"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400">
          {IconComponent && <IconComponent size={20} />}
        </div>
        <h3 className="text-lg font-semibold text-dark-100">{category.title}</h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={index * 0.1 + i * 0.05}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-24 md:py-32 relative">
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
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mb-12">
            Technologies and tools I work with to build modern web and mobile applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, i) => (
            <SkillCategoryCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
