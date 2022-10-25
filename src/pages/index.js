import styled from 'styled-components'
import Head from 'next/head'
import NewsCarousel from '../components/NewsCarousel'

const Index = () => {
  return (
    <>
      <Head>
        <title>Axios Front End Exercise</title>
      </Head>
      <div>
        <Title>More from Axios.com</Title>
      </div>
      <NewsCarousel />
    </>
  )
}

const Title = styled.h1`
  color: #333335;
  font-size: 32px;
  margin: 40px auto 40px 20px;
`

export default Index
