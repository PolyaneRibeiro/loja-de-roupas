import '../styles/globals.css'
import Head from 'next/head'
import { Menu } from '../components/Menu'
import { Container } from '../components/Container'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
