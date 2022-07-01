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
  const [identifyId, setIdentifyId] = useState()

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
      setIdentifyId(id)
      console.log(identifyId, 'identifyId')

      axios.get(`https://poly-2af89-default-rtdb.firebaseio.com/loja/${id}.json`)
        .then((response) => seRoupa(response.data))

    }
  }, [identifyId]);

  const carrinhoStorage = (imagem, nome, valor) => {
    const diferente = addCarrinho.filter(item => {
      return item.id !== identifyId
    })
    const diferenteTamanho = addCarrinho.filter(item => {
      return item.id === identifyId && item.tamanho !== tamanho
    })
    const igual = addCarrinho.filter(item => {
      return item.id === identifyId && item.tamanho === tamanho
    })
    if (igual.length > 0) {
      setAddCarrinho([...diferente, ...diferenteTamanho, {
        id: identifyId,
        img: imagem,
        roupa: nome,
        valor_unitario: parseFloat(valor),
        valor_total: parseFloat(valor) * (quantidade),
        tamanho: tamanho,
        quantidade: parseInt(quantidade) + igual[0].quantidade
      }])
      setMapeamento(!mapeamento)
      setOpen(true)
    }

    if (tamanho !== undefined && igual.length === 0) {
      setAddCarrinho([...addCarrinho,
      {
        id: identifyId,
        img: imagem,
        roupa: nome,
        valor_unitario: parseFloat(valor),
        valor_total: parseFloat(valor) * (quantidade),
        tamanho: tamanho,
        quantidade: parseInt(quantidade)
      }
      ])
      setMapeamento(!mapeamento)
      setOpen(true)
      setValidacao(false)
    }

    if (tamanho) {
      return setValidacao(false)
    } else return setValidacao(true)
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
