import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Titulo } from "../../components/Titulo";
import { Container } from '../../components/Container'
import { mockProduto } from '../../utils'
import { Button } from '../../components/Button'
import { TamanhoQnt } from '../../components/TamanhoQnt';
import * as S from '../style'

export default function Produto() {
  const [roupa, seRoupa] = useState()

  if (typeof window !== "undefined") {
    const url = window.location.href
    const splitUrl = url.split('?')
    const id = splitUrl[1]

    useEffect(() => {
      axios.get(`https://poly-2af89-default-rtdb.firebaseio.com/loja/${id}.json`)
        .then((response) => seRoupa(response.data))
    }, []);
  }

  return (
    <Container>
      <S.Section align='start' justify='start'>
        <S.ImgRoupa src={roupa?.img} />
        <S.Conteudo>
          <Titulo text1={roupa?.roupa} />
          <S.Descricao>{roupa?.descricao}</S.Descricao>
          <S.Valor> {`R$${roupa?.valor}`}</S.Valor>
          <TamanhoQnt />
          <Button text='Comprar' />
        </S.Conteudo>
      </S.Section>
    </Container>
  )
}
