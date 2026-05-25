import { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const CHANNEL_ID = 'UCB2S4eYCzfeQpHuwzdYUayQ'

export const YTVideo = () => {
  const [videoId, setVideoId] = useState<string | null>(null)

  useEffect(() => {
    const fetchLatestVideo = async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=1&type=video`
      )
      const data = await res.json()
      const id = data.items?.[0]?.id?.videoId
      if (id) setVideoId(id)
    }

    fetchLatestVideo()
  }, [])

  if (!videoId) return null

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden drop-shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Latest YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="w-full h-full"
      />
    </div>
  )
}