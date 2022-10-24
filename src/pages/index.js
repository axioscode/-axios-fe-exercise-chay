import styled from 'styled-components'
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <title>Axios Front End Exercise</title>
      </Head>
      <div>
        <Title>Axios Front End Exercise 🚀</Title>
      </div>
    </>
  )
}

const Title = styled.h1`
  color: red;
`

export default Index
