import { useState, useEffect } from 'react'

import { GITHUB_USERNAME } from '../constants/github'

import type { GitHubRepo } from '../types/github'

import { githubHeaders  } from '../constants/github'

const fetchPortfolioRepos = async (): Promise<GitHubRepo[]> => {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    {
      headers: githubHeaders
    }
  )
  if (!res.ok) throw new Error('Failed to fetch repos')
  const data = await res.json()
  return data.filter((repo: GitHubRepo) => repo.topics.includes('portfolio'))
}

export const useGitHubRepos = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchPortfolioRepos()
      .then(setRepos)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { repos, loading, error }
}