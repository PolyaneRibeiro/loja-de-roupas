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

  const responseStorage = () => {
    const response = typeof window !== "undefined" && localStorage.getItem('carrinho')
    if (response === null) {
      return ([])
    }
    else return (JSON.parse(response))
  }

  const [addCarrinho, setAddCarrinho] = useState(responseStorage)

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(addCarrinho));
  }, [addCarrinho]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href

      const splitUrl = url.split('?')
      const id = splitUrl[1]

      axios.get(`https://poly-2af89-default-rtdb.firebaseio.com/loja/${id}.json`)
        .then((response) => seRoupa(response.data))

    }
  }, []);

  const carrinhoStorage = (imagem, nome, preco) => {
    setAddCarrinho([...addCarrinho,
    {
      img: imagem,
      roupa: nome,
      valor: preco,
      tamanho: tamanho,
      quantidade: quantidade
    }
    ])
    setMapeamento(!mapeamento)
    setOpen(true)
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
          <Button text='Comprar' action={() => carrinhoStorage(roupa?.img, roupa?.roupa, roupa?.valor)} />
        </S.Conteudo>
      </S.Section>
    </Container>
  )
}
