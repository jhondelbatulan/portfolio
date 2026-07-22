import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'
import { experiences, education } from '@/data/portfolio'

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-24 md:py-32 relative">
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
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Education & <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </motion.div>

            <div className="relative pl-8 border-l-2 border-dark-700 space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary-600 border-4 border-dark-950" />
                  <div className="p-5 rounded-xl bg-dark-800/50 border border-dark-700/50 card-hover">
                    <h4 className="text-base font-semibold text-dark-100 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-primary-400 mb-2">{edu.school}</p>
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-dark-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {edu.startDate} - {edu.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-sm text-dark-400 leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-semibold">Work & Internships</h3>
            </motion.div>

            <div className="relative pl-8 border-l-2 border-dark-700 space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary-600 border-4 border-dark-950" />
                  <div className="p-5 rounded-xl bg-dark-800/50 border border-dark-700/50 card-hover">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20 capitalize">
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-dark-100 mb-1">{exp.role}</h4>
                    <p className="text-sm font-medium text-primary-400 mb-2">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-dark-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.startDate} - {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-sm text-dark-400 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
