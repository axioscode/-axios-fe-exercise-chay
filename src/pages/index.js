import styled from 'styled-components'
import Head from 'next/head'
import NewsCarousel from '../components/NewsCarousel'
import GoToAxiosBtn from '../components/GoToAxiosBtn'
import { AXIOS_WEBSITE } from '../helpers/resourceConstants'
import useWindowWidth from '../hooks/useWindowWidth'

const Index = () => {
  const isMobile = useWindowWidth() <= 700
  return (
    <>
      <Head>
        <title>Axios Front End Exercise</title>
      </Head>
      <TitleContainer isMobile={isMobile}>
        <Title>More from Axios.com</Title>
        {!isMobile && (
          <BtnContainer isMobile={isMobile}>
            <LinkStyle href={AXIOS_WEBSITE}>
              <GoToAxiosBtn />
            </LinkStyle>
          </BtnContainer>
        )}
      </TitleContainer>
      <NewsCarousel />
      {isMobile && (
        <BtnContainer>
          <LinkStyle href={AXIOS_WEBSITE}>
            <GoToAxiosBtn />
          </LinkStyle>
        </BtnContainer>
      )}
    </>
  )
}

const TitleContainer = styled.div`
${({isMobile}) => !isMobile ? `
  display: flex;
  align-items: center;
  justify-content: space-between;
  ` : null}
`
const Title = styled.h1`
  color: #333335;
  font-size: 32px;
  margin: 40px auto 40px 20px;
`
const BtnContainer = styled.div`
  margin-top: 3px;
  padding: 0 20px;
`

const LinkStyle = styled.a`
  text-decoration: none;
`

export default Index
