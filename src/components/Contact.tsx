import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'
import { personalInfo } from '@/data/portfolio'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [methodsRef, methodsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: personalInfo.github.replace('https://github.com/', 'github.com/'),
      href: personalInfo.github,
    },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 relative">
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
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            ref={methodsRef}
            initial={{ opacity: 0, x: -30 }}
            animate={methodsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'GitHub' ? '_blank' : undefined}
                rel={method.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={methodsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 card-hover group"
              >
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <method.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-dark-500 uppercase tracking-wider mb-0.5">
                    {method.label}
                  </p>
                  <p className="text-sm text-dark-200 font-medium truncate">{method.value}</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-dark-600 group-hover:text-primary-400 transition-colors flex-shrink-0"
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, x: 30 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center"
          >
            <div className="w-full p-8 rounded-2xl bg-gradient-to-br from-primary-600/10 to-primary-900/10 border border-primary-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-4">
                  <Mail size={24} className="text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-dark-100 mb-2">Let&apos;s work together</h3>
                <p className="text-sm text-dark-400">
                  I&apos;m currently available for freelance work and full-time positions.
                </p>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block w-full text-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/25"
              >
                Send me an email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
