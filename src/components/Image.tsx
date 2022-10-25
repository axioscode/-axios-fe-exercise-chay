import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  imgUrl: string
  alt: string
}

const Image: FC<Props> = ({ imgUrl, alt }) => {
  return <Thumbnail src={imgUrl} alt={alt} />
}

const Thumbnail = styled.img`
  height: 133px;
`
export default Image
