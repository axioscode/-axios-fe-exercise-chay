import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Image from '../components/Image'
import Headline from '../components/ArticleHeadline'
import useWindowWidth from '../hooks/useWindowWidth'
import { PLACEHOLDER_URL } from '../helpers/resourceConstants'

type Author = {
  display_name: string
}

type CropImage = {
  width: number
  height: number
  url: string
}

type Topic = {
  name: string
}

type Props = {
  article: {
    headline: string
    published_date: Date
    authors: Author[]
    topics: Topic[]
    permalink: string
    primary_image: {
      alt_text: string
      crops: {
        '16x9': {
          url: string
          sizes: CropImage[]
        }
      }
    }
  }
}

const Slide: FC<Props> = ({ article }) => {
  const isMobile = useWindowWidth() <= 375

  const imgUrl =
    article?.primary_image?.crops['16x9']?.sizes?.filter((image) => {
      return image?.width === 640
    })?.[0]?.url ||
    article?.primary_image?.crops['16x9']?.url ||
    PLACEHOLDER_URL
  const altText = article?.primary_image?.alt_text || ''
  const headline = article?.headline || ''

  const date = new Date(article?.published_date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options)

  const section = article?.topics?.[0]?.name || 'News'
  const articleUrl = article?.permalink || ''
  console.log(article)

  return (
    <SlideContainer>
      <a href={articleUrl} target="_blank" rel="noreferrer">
        <Image imgUrl={imgUrl} alt={altText} />
      </a>
      {!isMobile && <RespArticleSection>{section}</RespArticleSection>}
      <Headline headline={headline} isMobile={isMobile} />
      <DateContainer isMobile={isMobile}>
        <span>
          {formattedDate} {isMobile ? `- ${section}` : null}
        </span>
      </DateContainer>
    </SlideContainer>
  )
}

const SlideContainer = styled.figure`
  max-width: 217px;
  margin-bottom: 40px;
`

const RespArticleSection = styled.div`
  color: #ab7d36;
  font-size: 12px;
  margin-top: 24px;
`

const DateContainer = styled.div`
  color: #656568;
  font-size: 12px;
  margin-top: 12px;
`
const FormattedDate = styled.span``
export default Slide
