import React, { useState, useEffect } from 'react';
import { CardCarrinho } from '../../components/CardCarrinho';
import { Container } from '../../components/Container';
import { Formulario } from '../../components/Formulario';
import { Titulo } from '../../components/Titulo';
import { Button } from '../../components/Button';
import { Submit } from '../../utils';
import * as S from '../style'

export default function FecharPedido() {
  const [carrinho, setCarrinho] = useState()

  useEffect(() => {
    const response = typeof window !== "undefined" && localStorage.getItem('carrinho')
    setCarrinho(JSON.parse(response))
  }, []);

  return (
    <Container>
      <Titulo text1='Fechar' text2='Pedido' />
      <S.Section align='flex-start' >
        <S.ProdutosPedido>
          {carrinho?.map((item, index) => {
            return (
              <CardCarrinho
                key={index}
                img={item.img}
                roupa={item.roupa}
                valor={parseFloat(item.valor) * (item.quantidade)}
                quantidade={item.quantidade}
                tamanho={item.tamanho}
                valorUnitario={item.valor}
              />
            )
          })}
        </S.ProdutosPedido>
        <S.FecharPedido>
          <Formulario />
          <S.Total><span>Total:</span> R$ 150,00</S.Total>
          <S.Section>
            <Button text='Continuar Comprando' width='210px' action={() => Submit('/loja')} />
            <Button text='Fechar Pedido' />
          </S.Section>
        </S.FecharPedido>
      </S.Section>
    </Container>
  )
}
