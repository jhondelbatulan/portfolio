import { useEffect, useState } from 'react'

export interface GithubRepo {
  id: number
  name: string
  html_url: string
  homepage: string | null
  description: string | null
  language: string | null
  fork: boolean
  stargazers_count: number
  forks_count: number
  updated_at: string
}

const GITHUB_USER = 'jhondelbatulan'
const EXCLUDED_REPOS = new Set(['portfolio', 'My-Portfolio', 'jhondelbatulan'])

export function useGithubRepos(perPage = 100) {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=${perPage}`,
          {
            headers: { Accept: 'application/vnd.github+json' },
            signal: controller.signal,
          }
        )
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`)
        const data: GithubRepo[] = await res.json()
        setRepos(
          data
            .filter((repo) => !repo.fork && !EXCLUDED_REPOS.has(repo.name))
            .sort(
              (a, b) =>
                b.stargazers_count - a.stargazers_count ||
                Date.parse(b.updated_at) - Date.parse(a.updated_at)
            )
        )
      } catch (err) {
        if ((err as Error).name !== 'AbortError') setError(true)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    load()
    return () => controller.abort()
  }, [perPage])

  return { repos, loading, error }
}
