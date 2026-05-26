import { GITHUB_USERNAME } from '../constants/github'
import type { GitHubRepo } from '../types/github'
import type { Project } from '../types/project'

export function transformRepo(repo: GitHubRepo): Project {
  const topics = repo.topics ?? []

  const lowerTopics = topics.map(t => t.toLowerCase())

  const featured = lowerTopics.includes('featured')

  const categories = topics.filter(
    t => !['portfolio', 'featured'].includes(t.toLowerCase())
  )

  return {
    id: repo.id,
    slug: repo.name,
    title: repo.name.replace(/-/g, ' '),
    description: repo.description ?? 'no description yet~',
    href: repo.html_url,
    screenshot: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
    category: categories[0] ?? 'other',
    featured,
    date: repo.pushed_at
  }
}