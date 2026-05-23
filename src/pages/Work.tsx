// import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/content'

export default function Work() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="font-display text-4xl text-ink mb-2">my work ✦</h1>
        <p className="font-handwrite text-lg text-ink/60">
          things i've built and shipped ~
        </p>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div> */}
    </main>
  )
}
