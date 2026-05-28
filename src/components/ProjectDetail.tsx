import { useParams, Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'
import { ProjectHero } from '../components/ProjectHero'
import { ContentCard } from './ContentCard'

import PINK_CHECKERED_PAPER from '../assets/backgrounds/pink-checkered-paper.png'

export default function ProjectDetail() {
    const { slug } = useParams()
    const { projects, loading } = useProjects()
    const project = projects.find(p => p.slug === slug)

    if (loading) return (
        <p className="font-handwrite text-ink/50 text-center py-8">loading...</p>
    )

    if (!project) return (
        <main className="max-w-3xl mx-auto px-6 py-12 text-center">
            <h1 className="font-display text-4xl text-ink mb-4">project not found :(</h1>
            <Link to="/work" className="font-handwrite text-neon-pink hand-underline hand-underline-pink">
                ← back to all projects
            </Link>
        </main>
    )

    const { longDescription } = project;

    return (
        <main className="px-6 py-12">
            <ProjectHero project={project} />
            {longDescription && (
                <ContentCard title="about the project" bg={PINK_CHECKERED_PAPER}>
                    <div
                        className="prose prose-sm font-body text-ink mt-8 whitespace-normal wrap-anywhere max-w-none"
                        dangerouslySetInnerHTML={{ __html: longDescription }}
                    />
                </ContentCard>
            )}
        </main>
    )
}
