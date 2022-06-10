import React, { useEffect, useState } from 'react';
import { Button } from '../Button'
import { Submit } from '../../utils';
import * as S from './style'


export const ModalCarrinho = ({ open, close, mapeamento }) => {
    const [carrinho, setCarrinho] = useState()

    useEffect(() => {
        setTimeout(() => {
            const response = typeof window !== "undefined" && localStorage.getItem('carrinho')
            setCarrinho(JSON.parse(response))
        }, 10)
    }, [mapeamento]);

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
                                                        <S.Valor>R$ {parseFloat(item.valor) * (item.quantidade)}</S.Valor>
                                                    </S.Conteudo>
                                                </div>
                                            </S.CardCarrinho>
                                        )
                                    })}

                                    <Button text='Fechar Pedido' width='180px' action={() => Submit('/fechar-pedido')} />
                                </>
                            ) : <p>Não há pedidos no carrinho</p>}
                        </S.BoxCarrinho>
                    </S.MainCarrinho>

                </>
            }
        </>
    )
}