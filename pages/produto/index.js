import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Titulo } from "../../components/Titulo";
import { Container } from '../../components/Container'
import { Button } from '../../components/Button'
import { TamanhoQnt } from '../../components/TamanhoQnt';
import * as S from '../style'

export default function Produto({ setOpen, mapeamento, setMapeamento }) {
  const [roupa, seRoupa] = useState()
  const [quantidade, setQuantidade] = useState()
  const [tamanho, setTamanho] = useState()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href
      const splitUrl = url.split('?')
      const id = splitUrl[1]

      axios.get(`https://poly-2af89-default-rtdb.firebaseio.com/loja/${id}.json`)
        .then((response) => seRoupa(response.data))

    }
  }, []);

  const addCarrinho = () => {
    axios.post(`https://poly-2af89-default-rtdb.firebaseio.com/carrinho.json`, {
      roupa: roupa.roupa,
      valor: roupa.valor,
      img: roupa.img,
      quantidade: quantidade,
      tamanho: tamanho,

    })
      .then(() => { setMapeamento(!mapeamento), setOpen(true) })
      .catch(() => alert('não foi possível cadastrar a série'))

  }

  return (
    <Container>
      <S.Section align='start' justify='start'>
        <S.ImgRoupa src={roupa?.img} />
        <S.Conteudo>
          <Titulo text1={roupa?.roupa} />
          <S.Descricao>{roupa?.descricao}</S.Descricao>
          <S.Valor> {`R$${roupa?.valor}`}</S.Valor>
          <TamanhoQnt onChange={(e) => setQuantidade(e.target.value)} setTamanho={setTamanho} />
          <Button text='Comprar' action={() => addCarrinho()} />
        </S.Conteudo>
      </S.Section>
    </Container>
  )
}
