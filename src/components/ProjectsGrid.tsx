import ProjectCard from './ProjectCard'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  bgColor: string
  href: string
  screenshot?: string
  category?: string
}

interface ProjectsGridProps {
    projects: Project[]
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
    return (
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-4 lg:px-3">
            {projects.map((project) => {
                return (
                    <ProjectCard key={project.id} {...project} />
                )

            })}
        </div>
    )
}