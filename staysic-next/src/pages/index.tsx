import React from 'react'
import Head from 'next/head'

import Facebook from '../../public/assets/Facebook.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Staysic</title>
      </Head>

      <h1>Hello world!</h1>
      <Facebook />
    </Container>
  )
}

export default Home
