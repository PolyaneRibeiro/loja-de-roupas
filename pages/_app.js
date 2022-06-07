import '../styles/globals.css'
import React, { useState } from 'react';
import Head from 'next/head'
import { Menu } from '../components/Menu'
import { Rodape } from '../components/Rodape'

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false)
  const [mapeamento, setMapeamento] = useState()

  return (
    <>
      <Head>
        <title>Loja de Roupas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Oswald:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Menu open={open} setOpen={setOpen} mapeamento={mapeamento} />
      <Component
        {...pageProps}
        open={open}
        setOpen={setOpen}
        mapeamento={mapeamento}
        setMapeamento={setMapeamento} />
      <Rodape />
    </>
  )
}

export default MyApp
