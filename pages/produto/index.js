import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Titulo } from "../../components/Titulo";
import { Container } from '../../components/Container'
import { Button } from '../../components/Button'
import { TamanhoQnt } from '../../components/TamanhoQnt';
import { TratarValor } from '../../utils';
import * as S from '../style'
import { Breadcrumb } from '../../components/Breadcrumb';

export default function Produto({ setOpen, mapeamento, setMapeamento }) {
  const [roupa, seRoupa] = useState()
  const [quantidade, setQuantidade] = useState(1)
  const [tamanho, setTamanho] = useState()
  const [validacao, setValidacao] = useState(false)

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

  const carrinhoStorage = (imagem, nome, valor) => {
    if (tamanho !== undefined) {
      setAddCarrinho([...addCarrinho,
      {
        img: imagem,
        roupa: nome,
        valor_unitario: parseFloat(valor),
        valor_total: parseFloat(valor) * (quantidade),
        tamanho: tamanho,
        quantidade: quantidade
      }
      ])
      setMapeamento(!mapeamento)
      setOpen(true)
      setValidacao(false)
    }
    else return setValidacao(true)
  }

  return (
    <Container>
      <Breadcrumb categoriaLink={roupa?.categoria} categoria={roupa?.categoria_label} produto={roupa?.roupa} />
      <S.Section align='start' justify='start'>
        <S.ImgRoupa src={roupa?.img} />
        <S.Conteudo>
          <Titulo text1={roupa?.roupa} />
          <S.Descricao>{roupa?.descricao}</S.Descricao>
          <S.Valor> {`R$ ${TratarValor(parseFloat(roupa?.valor))}`}</S.Valor>
          <TamanhoQnt
            onChange={(e) => setQuantidade(e.target.value)}
            setTamanho={setTamanho}
            tamanho={tamanho}
            validacao={validacao}
          />
          <Button text='Comprar' action={() => carrinhoStorage(roupa?.img, roupa?.roupa, roupa?.valor)} />
        </S.Conteudo>
      </S.Section>
    </Container>
  )
}
