import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../styles/pages/Home'
import Toolbar from '../components/Toolbar'
const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Staysic</title>
      </Head>
      <div className="header">
        <Image
          className="logo"
          src="/assets/Staysic.svg"
          alt="Logo"
          width={234}
          height={95}
        />
        <Toolbar />
      </div>
    </Container>
  )
}

export default Home
