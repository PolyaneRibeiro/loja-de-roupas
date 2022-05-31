import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Titulo } from "../../components/Titulo";
import { Container } from '../../components/Container'
import { CardProdutos } from "../../components/CardProdutos";
import { MenuLateral } from '../../components/MenuLateral';
import { Submit } from '../../utils'

import * as S from '../style'

export default function Loja() {
  const [roupas, SetRoupas] = useState()

  useEffect(() => {
    axios.get('https://poly-2af89-default-rtdb.firebaseio.com/loja.json')
      .then((response) => SetRoupas(response.data))
  }, []);

  return (
    <>
      <Container>
        <Titulo text1='Loja' />
        <S.Section align='start'>
          <MenuLateral />
          <S.Produtos>
            {roupas && Object.entries(roupas).map(item => {
              return (
                <CardProdutos
                  img={item[1].img}
                  roupa={item[1].roupa}
                  valor={`R$${item[1].valor}`}
                  action={() => Submit(`/produto?${item[0]}`)} />
              )
            })}
          </S.Produtos>
        </S.Section>

      </Container>
    </>
  )
}
