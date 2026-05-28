const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const GITHUB_USERNAME = 'jessicaliang721'

export const githubHeaders = {
  Accept: 'application/vnd.github.v3+json',
  ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` }),
}