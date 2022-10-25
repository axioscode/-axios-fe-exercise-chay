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
  const isMobile = useWindowWidth() <= 980

  const imgUrl =
    article?.primary_image?.crops['16x9']?.sizes?.filter((image) => {
      return image?.width === 640
    })?.[0]?.url ||
    article?.primary_image?.crops['16x9']?.url ||
    PLACEHOLDER_URL
  const altText = article?.primary_image?.alt_text || ''
  const headline = article?.headline || ''
  const author = article?.authors?.[0]?.display_name || ''

  const date = new Date(article?.published_date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options)

  const section = article?.topics?.[0]?.name || 'News'
  const articleUrl = article?.permalink || ''

  return (
    <SlideContainer isMobile={isMobile}>
      <a href={articleUrl} target="_blank" rel="noreferrer">
        <Image imgUrl={imgUrl} alt={altText} />
      </a>
      {!isMobile && (
        <RespArticleSection>
          <div>{section}</div>
          <div>{author}</div>
        </RespArticleSection>
      )}
      <Headline headline={headline} isMobile={isMobile} />
      <DateContainer isMobile={isMobile}>
        <div>{formattedDate} </div>
        {isMobile ? (
          ` - ${section}`
        ) : (
          <div>
            <GoDeeperLink href={articleUrl} target="_blank">
              Go Deeper &#10230;
            </GoDeeperLink>
          </div>
        )}
      </DateContainer>
    </SlideContainer>
  )
}

type SlideContainerProps = {
  isMobile: boolean
}

const SlideContainer = styled.figure<SlideContainerProps>`
  ${({ isMobile }) => (isMobile ? `width: 217px;` : `width: 333px;`)}
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-block-end: 0px;
  margin-block-start: 0px;
  ${({ isMobile }) => (isMobile ? `margin-bottom: 40px;` : `margin-bottom: 64px;`)}
`

const RespArticleSection = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ab7d36;
  font-size: 12px;
  margin-top: 24px;
`

const DateContainer = styled.div`
  ${({ isMobile }) =>
    !isMobile
      ? `
align-items: center;
justify-content: space-between;
  `
      : null}
  display:flex;
  color: #656568;
  font-size: 12px;
  margin-top: 12px;
`

const GoDeeperLink = styled.a`
  color: #2257da;
  text-decoration: none;
  font-size: 18px;
  text-align: right;
`

export default Slide
