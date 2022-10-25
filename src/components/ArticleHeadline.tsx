import { FC } from 'react'
import styled from 'styled-components'

interface ArticleHeadlineProps {
  headline: string
}

const ArticleHeadline: FC<ArticleHeadlineProps> = ({ headline }) => {
  return <HeadlineContainer>{headline}</HeadlineContainer>
}

const HeadlineContainer = styled.div`
  color: #333335;
  margin-top: 16px;
`
export default ArticleHeadline