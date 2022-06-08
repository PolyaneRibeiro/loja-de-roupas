import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Titulo } from "../../components/Titulo";
import { Container } from '../../components/Container'
import { CardProdutos } from "../../components/CardProdutos";
import { MenuLateral } from '../../components/MenuLateral';
import { Submit } from '../../utils'
import { useRouter } from "next/router"
import * as S from '../style'

export default function Loja() {
  const [roupas, setRoupas] = useState()
  const [filtro, setFiltro] = useState()

  useEffect(() => {
    axios.get('https://poly-2af89-default-rtdb.firebaseio.com/loja.json')
      .then((response) => {
        setRoupas(Object.entries(response.data))
        setFiltro(Object.entries(response.data))
      })
  }, []);

  const handleRoupas = (category) => {
    const filterRoupas = roupas?.filter(item => {
      return item[1].categoria === category
    })
    setFiltro(filterRoupas)
  }

  const router = useRouter()

  const Submit2 = (page) => {
    router.push(page)
  }


  return (
    <>
      <Container>
        <Titulo text1='Loja' />
        <S.Section align='start'>
          <MenuLateral
            action={handleRoupas}
          />
          <S.Produtos>
            {filtro && filtro.map(item => {
              return (
                <CardProdutos
                  img={item[1].img}
                  roupa={item[1].roupa}
                  valor={`R$${item[1].valor}`}
                  action={() => Submit2(`/produto?${item[0]}`)}
                  key={item[0]}
                />
              )
            })}
          </S.Produtos>
        </S.Section>

      </Container>
    </>
  )
}
