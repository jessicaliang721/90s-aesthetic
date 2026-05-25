// src/hooks/useChannelDetails.ts
import { useState, useEffect } from 'react'
import { API_KEY, CHANNEL_ID } from '../constants/youtube'

interface ChannelData {
  name: string
  avatar: string
  subscriberCount: string
  description: string
}

const fetchChannelDetails = async (): Promise<ChannelData> => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=${CHANNEL_ID}&part=snippet,statistics`
  )
  const data = await res.json()
  const channel = data.items?.[0]

  if (!channel) throw new Error('Channel not found')

  return {
    name: channel.snippet.title,
    description: channel.snippet.description,
    avatar: channel.snippet.thumbnails.default.url,
    subscriberCount: Number(channel.statistics.subscriberCount).toLocaleString(),
  }
}

export const useChannelDetails = () => {
  const [channel, setChannel] = useState<ChannelData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchChannelDetails()
      .then(setChannel)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { channel, loading, error }
}