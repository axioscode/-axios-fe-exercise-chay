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

  return (
    <CarouselContainer>
      <Carousel
        slidesToShow={isMobile ? 1.5 : 3}
        renderCenterLeftControls={isMobile ? () => null : null}
        renderCenterRightControls={() => null}
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
export default NewsCarousel
