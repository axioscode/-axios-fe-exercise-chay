import useSWR from 'swr'
import { STREAM_URI, CONTENT_URI } from '../helpers/resourceConstants'

type StreamResponse = {
  count: number
  next: string
  results: string[]
}
const useCarouselQuery = () => {
  const fetcher = async () => {
    const response = await fetch(STREAM_URI)
    const data = await response.json()
    const { results } = data
    const newsArticles = await Promise.all(
      results.map(async (uid) => {
        const resp = await fetch(CONTENT_URI + uid)
        return await resp.json()
      })
    )

    return newsArticles
  }
  const { data } = useSWR('tele', fetcher)
  return data
}

export default useCarouselQuery
