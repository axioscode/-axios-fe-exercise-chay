import { FC } from 'react'
import styled from 'styled-components'
import useWindowWidth from '../hooks/useWindowWidth'

type Props = {
  imgUrl: string
  alt: string
}

const Image: FC<Props> = ({ imgUrl, alt }) => {
  const isMobile = useWindowWidth() <= 700
  return <Thumbnail src={imgUrl} alt={alt} isMobile={isMobile} />
}

const Thumbnail = styled.img`
  ${({ isMobile }) => (isMobile ? `height: 133px;` : `height: 205px`)}
`

export default Image
