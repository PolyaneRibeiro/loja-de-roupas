import React, { useState, useEffect } from 'react';
import { CardCarrinho } from '../../components/CardCarrinho';
import { Container } from '../../components/Container';
import { Formulario } from '../../components/Formulario';
import { Titulo } from '../../components/Titulo';
import { Button } from '../../components/Button';
import { Submit, TratarValor } from '../../utils';
import * as S from '../style'

export default function FecharPedido({ setMapeamento, mapeamento }) {
  const [pedidos, setPedidos] = useState()

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

  return (
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
          <Formulario />
          <S.Total><span>Total: </span>
            R$ {TratarValor(total)}
          </S.Total>
          <S.Section>
            <Button text='Continuar Comprando' width='210px' action={() => Submit('/loja')} />
            <Button text='Fechar Pedido' />
          </S.Section>
        </S.FecharPedido>
      </S.Section>
    </Container>
  )
}
