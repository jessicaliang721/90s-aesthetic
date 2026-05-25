import { useState, useEffect } from 'react'
import { API_KEY, CHANNEL_ID } from '../constants/youtube'

interface VideoData {
  videoId: string
  title: string
  description: string
  channelTitle: string
}

const fetchLatestVideo = async (): Promise<VideoData> => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=1&type=video`
  )
  const data = await res.json()
  const item = data.items?.[0]
  console.log('item', item)
  if (!item) throw new Error('No videos found')

  return {
    videoId: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    channelTitle: item.snippet.channelTitle,
  }
}

export const useLatestVideo = () => {
  const [video, setVideo] = useState<VideoData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchLatestVideo()
      .then(setVideo)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { video, loading, error }
}