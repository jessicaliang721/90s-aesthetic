import { GITHUB_USERNAME } from '../constants/github'

import { githubHeaders } from '../constants/github'

export const fetchReadme = async (repoName: string): Promise<string | null> => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`,
      { headers: githubHeaders }
    )
    if (!res.ok) return null
    return res.text()
  } catch {
    return null  // not every repo has a readme, fail silently
  }
}