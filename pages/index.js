import React from 'react';
import { Title } from "../components/Title";
import { Container } from '../components/Container'
import { BoxTendencia } from '../components/BoxTendencia'
import { CardProdutos } from "../components/CardProdutos";
import { mockPecasExclusivas, mockMarcas } from '../utils'
import * as S from './style'

export default function Home() {
  return (
    <>
      <Container>
        <img src='./banner.jpg' />
      </Container>
      <S.ContainerRose>
        <BoxTendencia
          titleCategory={<Title text1='Tendências' />}
          titleTendencia='CROPET DE RENDA'
          text1='O cropped de renda é uma peça delicada e que voltou com força e faz a cabeça de muitas amantes da moda, já que ele pode compor diversos estilos e te levar a vários tipos de ambientes super bem vestida.'
          text2='Além de prático e bonito, o seu modelo vai trazer um ar feminino e sensual...'
          img='./cropet.jpg'
          topImg='50px'

        />
      </S.ContainerRose>
      <BoxTendencia
        titleTendencia='CASACO TEDDY'
        text1='Com a queda das temperaturas, o casaco teddy volta a dominar o feed do Instagram. Quentinho, confortável e estiloso, é fácil entender a razão do sucesso do item, que também teve alta significante nas pesquisas do Google.'
        text2='A modelagem do casaco teddy pode variar e isso torna a tendência ainda mais versátil. Nos anos anteriors, as modelagens alongadas dominaram o street style. Contudo, as mais moderninhas preferem versões curtinhas do casaco, que combinam bastante com looks mais esportivos.'
        img='./casaco-teddy.jpg'
        direction='row-reverse'
        topBox='40px'
        rightImg='50px'
        alignBox='center'
      />
      <Container>
        <Title text1='Peças' text2='Exclusivas' />
        <S.Section>
          {mockPecasExclusivas.map(item => {
            return (
              <CardProdutos clothing={item.clothing} value={item.value} img={item.img} />
            )
          })}
        </S.Section>
        <Title text1='Marcas' text2='Vendidas' />
        <S.Section >
          {mockMarcas.map(item => {
            return (
              <img src={item.logo} />
            )
          })}
        </S.Section>
      </Container>
    </>
  )
}
