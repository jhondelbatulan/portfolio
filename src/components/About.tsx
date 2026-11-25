import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Calendar, MapPin, GraduationCap } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [detailsRef, detailsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { label: 'Programming Languages', value: '5+' },
    { label: 'Frameworks & Libraries', value: '4+' },
    { label: 'Databases', value: '3+' },
    { label: 'Tools', value: '4+' },
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative">
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
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Get to know me{' '}
            <span className="text-gradient">better</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            ref={detailsRef}
            initial={{ opacity: 0, x: -40 }}
            animate={detailsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-6">
              <p className="text-lg text-dark-300 leading-relaxed">
                {personalInfo.aboutDetailed}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: User, label: 'Name', value: personalInfo.name },
                  { icon: GraduationCap, label: 'Degree', value: 'BS Information Technology' },
                  { icon: MapPin, label: 'Location', value: personalInfo.location.split(',')[0] + ', ' + personalInfo.location.split(',')[1]?.trim() },
                  { icon: Calendar, label: 'Expected graduation', value: '2027' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-xl bg-dark-800/50 border border-dark-700/50"
                  >
                    <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-dark-500 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-dark-200">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 40 }}
            animate={statsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 text-center card-hover"
              >
                <p className="text-3xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-xs text-dark-400 leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
