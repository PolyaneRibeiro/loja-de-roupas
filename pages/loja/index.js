import React from 'react';
import { Title } from "../../components/Title";
import { Container } from '../../components/Container'
import { CardProdutos } from "../../components/CardProdutos";
import { mockPecasExclusivas} from '../../utils'
import { MenuLateral } from '../../components/MenuLateral';
import * as S from '../style'

export default function Loja() {
  return (
    <>
      <Container>
        <Title text1='Loja' />
        <S.Section align='start'>
          <MenuLateral/>
          <S.Produtos>
          {mockPecasExclusivas.map(item => {
            return (
              <CardProdutos clothing={item.clothing} value={item.value} img={item.img} />
            )
          })}
          </S.Produtos>
        </S.Section>
      
      </Container>
    </>
  )
}
