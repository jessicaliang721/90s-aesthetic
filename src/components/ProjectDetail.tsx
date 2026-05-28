import { useParams, Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'
import { ProjectHero } from '../components/ProjectHero'
import { ContentCard } from './ContentCard'

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
                <ContentCard title="about the project" bgColor="#feefee">
                    <div
                        className="prose prose-sm font-body text-ink mt-8 whitespace-normal wrap-anywhere max-w-none"
                        dangerouslySetInnerHTML={{ __html: longDescription }}
                    />
                </ContentCard>
            )}

            <ContentCard title="screenshots" bgColor="#f4ebf8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.screenshots?.desktop && (
                        <div className="flex flex-col items-center gap-2">
                            <a
                                href={project.screenshots.desktop}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full rounded-lg overflow-hidden border-2 border-ink drop-shadow-md transition-transform hover:scale-[1.02] hover:-rotate-1"
                            >
                                <img
                                    src={project.screenshots.desktop}
                                    alt={`${project.title} desktop screenshot`}
                                    className="w-full object-cover object-top"
                                    style={{ height: '160px' }}
                                />
                            </a>

                            <span className="font-handwrite text-sm text-ink/60">
                                desktop
                            </span>
                        </div>
                    )}

                    {project.screenshots?.mobile && (
                        <div className="flex flex-col items-center gap-2">
                            <a
                                href={project.screenshots.mobile}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full rounded-lg overflow-hidden border-2 border-ink drop-shadow-md transition-transform hover:scale-[1.02] hover:-rotate-1"
                            >
                                <img
                                    src={project.screenshots.mobile}
                                    alt={`${project.title} mobile screenshot`}
                                    className="w-full object-cover object-top"
                                    style={{ height: '160px' }}
                                />
                            </a>

                            <span className="font-handwrite text-sm text-ink/60">
                                mobile
                            </span>
                        </div>
                    )}
                </div>
            </ContentCard>
        </main >
    )
}
