import { FC } from 'react'
import styled from 'styled-components'

interface ArticleHeadlineProps {
  headline: string
  isMobile: boolean
}

const ArticleHeadline: FC<ArticleHeadlineProps> = ({ headline, isMobile }) => {
  return <HeadlineContainer isMobile={isMobile}>{headline}</HeadlineContainer>
}

type HeadlineContainerProps = {
  isMobile: boolean
}

const HeadlineContainer = styled.div<HeadlineContainerProps>`
  color: #333335;
  ${({ isMobile }) => (isMobile ? `margin-top: 16px;` : `margin-top: 8px;`)}
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`
export default ArticleHeadline
