import styled from 'styled-components'
import Head from 'next/head'
import NewsCarousel from '../components/NewsCarousel'
import GoToAxiosBtn from '../components/GoToAxiosBtn'
import { AXIOS_WEBSITE } from '../helpers/resourceConstants'

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
      <a href={AXIOS_WEBSITE}>
        <GoToAxiosBtn />
      </a>
    </>
  )
}

const Title = styled.h1`
  color: #333335;
  font-size: 32px;
  margin: 40px auto 40px 20px;
`

export default Index
