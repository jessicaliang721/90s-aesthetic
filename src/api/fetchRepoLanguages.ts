import { GITHUB_USERNAME } from '../constants/github'
import { githubHeaders } from '../constants/github'

const languageCache = new Map<string, Record<string, number>>()

export async function fetchRepoLanguages(repoName: string) {
  // Return cached result
  if (languageCache.has(repoName)) {
    return languageCache.get(repoName)!
  }

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`,
    {
      headers: githubHeaders
    }
  )

  if (!res.ok) {
    throw new Error(`Failed to fetch languages for ${repoName}`)
  }

  const data = await res.json()

  languageCache.set(repoName, data)

  return data as Record<string, number>
}