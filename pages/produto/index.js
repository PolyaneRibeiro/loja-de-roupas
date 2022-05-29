import React from 'react';
import { Titulo } from "../../components/Titulo";
import { Container } from '../../components/Container'
import { mockProduto } from '../../utils'
import { Button } from '../../components/Button'
import * as S from '../style'
import { TamanhoQnt } from '../../components/TamanhoQnt';

export default function Produto() {
  return (
    <Container>
      <S.Section align='start'>
        <S.ImgRoupa src={mockProduto.img} />
        <S.Conteudo>
          <Titulo text1={mockProduto.roupa} />
          <p>{mockProduto.descricao}</p>
          <S.Valor>{mockProduto.valor}</S.Valor>
          <TamanhoQnt />
          <Button text='Comprar' />
        </S.Conteudo>
      </S.Section>
    </Container>
  )
}
