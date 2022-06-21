import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Titulo } from "../components/Titulo";
import { Container } from '../components/Container'
import { BoxTendencia } from '../components/BoxTendencia'
import { CardProdutos } from "../components/CardProdutos";
import { Submit, mockMarcas } from '../utils'
import * as S from './style'

export default function Home() {
  const [roupas, SetRoupas] = useState()

  useEffect(() => {
    axios.get('https://poly-2af89-default-rtdb.firebaseio.com/loja.json')
      .then((response) => SetRoupas(Object.entries(response.data)))
  }, []);

  const exclusivas = roupas?.filter(item => {
    return item[1].categoria === 'peças exclusivas'
  })

  return (
    <>
      <Container>
        <S.Section>
          <S.ImgBanner onClick={() => Submit(`/loja`)} src='./banner1.jpg' />
          <S.ImgBanner onClick={() => Submit(`/loja`)} src='./banner2.jpg' />
          <S.ImgBanner onClick={() => Submit(`/tendencias`)} src='./banner3.jpg' />
        </S.Section>
      </Container>
      <S.ContainerRose>
        <BoxTendencia
          tituloCategory={<Titulo text1='Tendências' />}
          tituloTendencia='CROPET DE RENDA'
          text1='O cropped de renda é uma peça delicada e que voltou com força e faz a cabeça de muitas amantes da moda, já que ele pode compor diversos estilos e te levar a vários tipos de ambientes super bem vestida.'
          text2='Além de prático e bonito, o seu modelo vai trazer um ar feminino e sensual...'
          img='./tendencias/cropped.jpg'
          topImg='50px'

        />
      </S.ContainerRose>
      <BoxTendencia
        tituloTendencia='CASACO TEDDY'
        text1="Com a queda das temperaturas, o casaco teddy volta a dominar o feed do Instagram. Quentinho, confortável e estiloso, é fácil entender a razão do sucesso do item, que também teve alta significante nas pesquisas do Google."
        text2='A modelagem do casaco teddy pode variar e isso torna a tendência ainda mais versátil. Nos anos anteriors, as modelagens alongadas dominaram o street style. Contudo, as mais moderninhas preferem versões curtinhas do casaco, que combinam bastante com looks mais esportivos.'
        img='./tendencias/casaco-teddy.jpg'
        direction='row-reverse'
        topBox='40px'
        rightImg='50px'
        alignBox='center'
      />
      <Container>
        <Titulo text1='Peças' text2='Exclusivas' />
        <S.Section>
          {exclusivas?.map(item => {
            return (
              <CardProdutos
                roupa={item[1].roupa}
                valor={`R$${item[1].valor}`}
                img={item[1].img}
                action={() => Submit(`/produto?${item[0]}`)}
                key={item[0]}
              />
            )
          })}
        </S.Section>
        <Titulo text1='Marcas' text2='Vendidas' />
        <S.Section >
          {mockMarcas.map((item, index) => {
            return (
              <img src={item} key={index} />
            )
          })}
        </S.Section>
      </Container>
    </>
  )
}
