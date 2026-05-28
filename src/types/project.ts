export interface Screenshot {
  desktop?: string
  mobile?: string
}

export interface Project {
  id: string | number
  title: string
  description: string
  longDescription?: string
  href?: string
  screenshots?: Screenshot
  category: string
  slug: string
  date: string
  featured: boolean
  mobileScreenshot?: string
  githubHref?: string
  techStack?: string[]
}