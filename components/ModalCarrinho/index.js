import React, { useEffect, useState } from 'react';
import { Button } from '../Button'
import { Submit } from '../../utils';
import * as S from './style'


export const ModalCarrinho = ({ open, close, carrinho }) => {
    return (
        <>
            {open &&
                <>
                    <S.Background onClick={close}></S.Background>
                    <S.MainCarrinho>
                        <S.BoxCarrinho>
                            {carrinho?.length > 0 ? (
                                <>
                                    {carrinho.map((item, index) => {
                                        return (
                                            <S.CardCarrinho key={index}>
                                                <S.Thumbnail src={item.img}></S.Thumbnail>
                                                <div>
                                                    <S.Titulo>{item.roupa} - {item.tamanho}</S.Titulo>
                                                    <S.Conteudo>
                                                        <S.Quantidade>Quantidade: {item.quantidade}</S.Quantidade>
                                                        <S.Valor>R$ {item.valor_total.toFixed(2)}</S.Valor>
                                                    </S.Conteudo>
                                                </div>
                                            </S.CardCarrinho>
                                        )
                                    })}

                                    <Button text='Ir para o Carrinho' width='180px' action={() => Submit('/fechar-pedido')} />
                                </>
                            ) : <p>Não há pedidos no carrinho</p>}
                        </S.BoxCarrinho>
                    </S.MainCarrinho>

                </>
            }
        </>
    )
}