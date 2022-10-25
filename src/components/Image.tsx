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

type ThumbnailProps = {
  isMobile: boolean
}

const Thumbnail = styled.img<ThumbnailProps>`
  ${({ isMobile }) => (isMobile ? `height: 133px;` : `height: 205px;`)}
`
export default Image
