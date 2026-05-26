export interface Project {
  id: string | number
  title: string
  description: string
  href: string
  screenshot?: string
  category?: string
  slug: string
  date: string
  featured: boolean
}