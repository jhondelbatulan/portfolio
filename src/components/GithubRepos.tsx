import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Star, GitFork, Calendar, ExternalLink, RefreshCw } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'
import { useGithubRepos } from '@/hooks/useGithubRepos'
import type { GithubRepo } from '@/hooks/useGithubRepos'

const LANGUAGE_COLORS: Record<string, string> = {
  PHP: '#4F5B93',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Dart: '#00B4AB',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
}

function screenshotUrl(repoUrl: string) {
  return `https://image.thum.io/get/width/1200/crop/800/noanimate/${repoUrl}`
}

function fallbackScreenshotUrl(repoUrl: string) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(repoUrl)}?w=1200&h=800`
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(
    new Date(iso)
  )
}

function RepoCard({ repo, index }: { repo: GithubRepo; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [srcIndex, setSrcIndex] = useState(0)

  const sources = [screenshotUrl(repo.html_url), fallbackScreenshotUrl(repo.html_url)]
  const showImage = srcIndex < sources.length
  const languageColor = repo.language ? LANGUAGE_COLORS[repo.language] : undefined

  const handleImageError = () => setSrcIndex((i) => i + 1)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 6) * 0.15 }}
      className="group rounded-2xl bg-dark-800/50 border border-dark-700/50 overflow-hidden card-hover"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-600/10 to-primary-900/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
            <GithubIcon size={28} className="text-primary-500" />
          </div>
        </div>
        {showImage && (
          <img
            src={sources[srcIndex]}
            alt={`Preview of ${repo.name}`}
            loading="lazy"
            onError={handleImageError}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark-800/80 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-dark-100 mb-2 group-hover:text-primary-400 transition-colors truncate">
          {repo.name.replace(/[-_]/g, ' ')}
        </h3>

        <p className="text-sm text-dark-400 mb-4 leading-relaxed line-clamp-2 min-h-[2.5rem]">
          {repo.description || 'A project hosted on my GitHub.'}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-dark-500 mb-5">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: languageColor ?? '#94a3b8' }}
              />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Star size={12} />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork size={12} />
            {repo.forks_count}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(repo.updated_at)}
          </span>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-dark-700 hover:bg-dark-600 text-dark-200 rounded-lg border border-dark-600 hover:border-dark-500 transition-all w-fit"
        >
          <GithubIcon size={16} />
          View Code
        </a>
      </div>
    </motion.div>
  )
}

function RepoSkeleton({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      className="rounded-2xl bg-dark-800/50 border border-dark-700/50 overflow-hidden animate-pulse"
      aria-hidden="true"
    >
      <div className="h-48 bg-dark-700/40" />
      <div className="p-6 space-y-3">
        <div className="h-4 w-2/3 rounded bg-dark-700/60" />
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-dark-700/40" />
          <div className="h-3 w-5/6 rounded bg-dark-700/40" />
        </div>
        <div className="flex gap-3 pt-1">
          <div className="h-3 w-16 rounded bg-dark-700/40" />
          <div className="h-3 w-12 rounded bg-dark-700/40" />
        </div>
        <div className="h-9 w-28 rounded-lg bg-dark-700/60 mt-4" />
      </div>
    </motion.div>
  )
}

export default function GithubRepos() {
  const { repos, loading, error } = useGithubRepos()
  const visible = repos.slice(0, 6)

  return (
    <div id="repositories" className="mt-24 pt-16 border-t border-dark-700/40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-primary-600" />
          <span className="text-primary-400 text-sm font-semibold uppercase tracking-wider">
            GitHub
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Recent <span className="text-gradient">Repositories</span>
        </h2>
        <p className="text-dark-400 max-w-2xl mb-12">
          Explore selected projects from my GitHub, with repository details and links to the source code.
        </p>
      </motion.div>

      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <RepoSkeleton key={i} index={i} />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="p-8 rounded-2xl bg-dark-800/50 border border-dark-700/50 text-center">
          <RefreshCw size={24} className="mx-auto text-primary-400 mb-3" />
          <p className="text-dark-300 mb-4">
            Couldn&apos;t load repositories from GitHub right now.
          </p>
          <a
            href="https://github.com/jhondelbatulan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary-600 hover:bg-primary-500 text-white rounded-xl transition-all"
          >
            <ExternalLink size={16} />
            Visit My GitHub
          </a>
        </div>
      )}

      {!loading && !error && visible.length > 0 && (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
          {repos.length > visible.length && (
            <div className="text-center mt-10">
              <a
                href="https://github.com/jhondelbatulan?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-dark-700 hover:bg-dark-600 text-dark-200 rounded-xl border border-dark-600 hover:border-dark-500 transition-all"
              >
                <GithubIcon size={18} />
                View All {repos.length} Repositories
              </a>
            </div>
          )}
        </>
      )}
    </div>
  )
}
