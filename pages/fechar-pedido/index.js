import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardCarrinho } from '../../components/CardCarrinho';
import { Container } from '../../components/Container';
import { Formulario } from '../../components/Formulario';
import { Titulo } from '../../components/Titulo';
import { Button } from '../../components/Button';
import { Submit, TratarValor } from '../../utils';
import * as S from '../style'

export default function FecharPedido({ setMapeamento, mapeamento, setOpenModal, setSuccess }) {
  const [pedidos, setPedidos] = useState()
  const [valueEnd, setValueEnd] = useState()
  const [valueNome, setValueNome] = useState()
  const [valueTel, setValueTel] = useState()
  const [valueEmail, setValueEmail] = useState()
  const [validacaoNome, setValidacaoNome] = useState(false)
  const [validacaoTel, setValidacaoTel] = useState(false)
  const [validacaoEmail, setValidacaoEmail] = useState(false)
  const [validacaoEnd, setValidacaoEnd] = useState(false)

  useEffect(() => {
    const response = typeof window !== "undefined" && localStorage.getItem('carrinho')
    setPedidos(JSON.parse(response))
  }, []);

  const excluir = (index) => {
    const list = [...pedidos];
    list.splice(index, 1);
    setPedidos(list);
    setMapeamento(!mapeamento)

    localStorage.setItem('carrinho', JSON.stringify(list))
  };

  const total = pedidos?.reduce(function (total, pedidos) {
    return total + pedidos?.valor_total;
  }, 0);

  const enviar = () => {
    if (valueNome === undefined) {
      setValidacaoNome(true)
    } else { setValidacaoNome(false) }

    if (valueTel === undefined) {
      setValidacaoTel(true)
    } else { setValidacaoTel(false) }

    if (valueEnd === undefined) {
      setValidacaoEnd(true)
    } else { setValidacaoEnd(false) }

    if (valueEmail === undefined) {
      setValidacaoEmail(true)
    } else { setValidacaoEmail(false) }

    if (valueTel !== undefined && valueNome !== undefined && valueEmail !== undefined && valueEnd !== undefined) {
      axios.post('https://poly-2af89-default-rtdb.firebaseio.com/pedidos.json', {
        nome: valueNome,
        telefone: valueTel,
        email: valueEmail,
        endereco: valueEnd,
        pedidos: [...pedidos]
      })
        .then(() => {
          setOpenModal(true)
          setSuccess(true)
          localStorage.removeItem('carrinho');
        })
        .catch(() => setOpenModal(true))
    }
  }




  return (
    <>
      <Container>
        <Titulo text1='Fechar' text2='Pedido' />
        <S.Section align='flex-start' >
          <S.ProdutosPedido>
            {pedidos?.map((item, index) => {
              return (
                <CardCarrinho
                  key={index}
                  img={item.img}
                  roupa={item.roupa}
                  valor={TratarValor(item.valor_total)}
                  quantidade={item.quantidade}
                  tamanho={item.tamanho}
                  valorUnitario={TratarValor(item.valor_unitario)}
                  action={() => excluir(index)}
                />
              )
            })}
          </S.ProdutosPedido>
          <S.FecharPedido>
            <Formulario
              nome={(e) => setValueNome(e.target.value)}
              telefone={(e) => setValueTel(e.target.value)}
              email={(e) => setValueEmail(e.target.value)}
              endereco={(e) => setValueEnd(e.target.value)}
              validacaoNome={validacaoNome}
              validacaoTel={validacaoTel}
              validacaoEnd={validacaoEnd}
              validacaoEmail={validacaoEmail}
            />
            <S.Total><span>Total: </span>
              R$ {TratarValor(total)}
            </S.Total>
            <S.Section>
              <Button text='Continuar Comprando' width='210px' action={() => Submit('/loja')} />
              <Button text='Fechar Pedido' action={() => enviar()} />
            </S.Section>
          </S.FecharPedido>
        </S.Section>
      </Container>
    </>
  )
}
