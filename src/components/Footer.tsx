import { Mail, Heart } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'
import { personalInfo } from '@/data/portfolio'
import { navLinks } from '@/data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-800/50 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#home" className="text-2xl font-bold text-gradient">
              JB
            </a>
            <p className="text-sm text-dark-400 mt-3 max-w-xs leading-relaxed">
              Full Stack Developer specializing in building modern web and mobile applications.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-dark-800/50 border border-dark-700/50 text-dark-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-dark-800/50 border border-dark-700/50 text-dark-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-dark-500 flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
