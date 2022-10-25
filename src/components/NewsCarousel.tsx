import { FC } from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import Slide from '../components/Slide'
import useCarouselQuery from '../hooks/useCarouselQuery'
import useWindowWidth from '../hooks/useWindowWidth'

type Props = {}

const NewsCarousel: FC<Props> = () => {
  const isMobile = useWindowWidth() <= 375
  const articles = useCarouselQuery()
  const slidesToShow = (width: number) => {
    if (width <= 375) return 1.5
    if (width <= 700) return 2
    return 3
  }

  return (
    <CarouselContainer>
      <Carousel
        slidesToShow={slidesToShow(useWindowWidth())}
        renderCenterLeftControls={isMobile ? () => null : ({previousSlide}) => (<CarouselBtn>hello</CarouselBtn>  )}
        renderCenterRightControls={() => null}
        cellSpacing={20}
      >
        {articles?.map((article) => (
          <>
            <Slide article={article} key={article?.id} />
          </>
        ))}
      </Carousel>
    </CarouselContainer>
  )
}

const CarouselContainer = styled.div`
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
`

const CarouselBtn = styled.button`
background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
`
export default NewsCarousel
