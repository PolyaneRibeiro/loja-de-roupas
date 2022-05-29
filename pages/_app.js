import '../styles/globals.css'
import Head from 'next/head'
import { Menu } from '../components/Menu'
import { Rodape } from '../components/Rodape'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Loja de Roupas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Oswald:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Menu />
      <Component {...pageProps} />
      <Rodape />
    </>
  )
}

export default MyApp
