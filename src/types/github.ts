export interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  language: string
  stargazers_count: number
  pushed_at: string
  has_pages: boolean
  social_preview_url: string
}