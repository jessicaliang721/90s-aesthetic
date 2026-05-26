import { useMemo } from 'react'
import { projects as customProjects } from '../data/projects'
import { transformRepo } from '../utils/transformRepo'
import { useGitHubRepos } from './useGitHubRepos'
import type { Project } from '../types/project'

export function useProjects() {
    const { repos, loading, error } = useGitHubRepos()

    const projects: Project[] = useMemo(() => {
        const githubProjects = repos.map(transformRepo)
        console.log('githubProjects', githubProjects)

        const allProjects = [
            ...customProjects,
            ...githubProjects,
        ]

        return [...allProjects].sort(
            (a, b) =>
                new Date(b.date).getTime() -
                new Date(a.date).getTime()
        )
    }, [repos])

    return {
        projects,
        loading,
        error,
    }
}