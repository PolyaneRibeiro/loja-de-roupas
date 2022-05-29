import React from 'react';
import { Titulo } from "../../components/Titulo";
import { Container } from '../../components/Container'
import { CardProdutos } from "../../components/CardProdutos";
import { mockPecasExclusivas } from '../../utils'
import { MenuLateral } from '../../components/MenuLateral';
import { Submit } from '../../utils'

import * as S from '../style'

export default function Loja() {
  return (
    <>
      <Container>
        <Titulo text1='Loja' />
        <S.Section align='start'>
          <MenuLateral />
          <S.Produtos>
            {mockPecasExclusivas.map(item => {
              return (
                <CardProdutos
                  img={item.img}
                  roupa={item.roupa}
                  valor={item.valor}
                  action={() => Submit('/produto')} />
              )
            })}
          </S.Produtos>
        </S.Section>

      </Container>
    </>
  )
}
