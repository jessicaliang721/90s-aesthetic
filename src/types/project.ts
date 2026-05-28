export interface Project {
  id: string | number
  title: string
  description: string
  longDescription?: string
  href?: string
  screenshot?: string
  category: string
  slug: string
  date: string
  featured: boolean
  mobileScreenshot?: string
  githubHref?: string
  techStack?: string[]
}