import React, { useEffect, useState } from 'react';
import { Button } from '../Button'
import axios from 'axios';
import * as S from './style'


export const ModalCarrinho = ({ open, close, mapeamento }) => {
    const [carrinho, setCarrinho] = useState()

    useEffect(() => {
        axios.get('https://poly-2af89-default-rtdb.firebaseio.com/carrinho.json')
            .then((response) => {
                setCarrinho(Object.values(response.data))
            })
    }, [mapeamento]);

    return (
        <>
            {open &&
                <>
                    <S.Background onClick={close}></S.Background>
                    <S.MainCarrinho>
                        <S.BoxCarrinho>
                            {carrinho.map((item, index) => {
                                {console.log(parseFloat(item.valor))}
                                return (
                                    <S.CardCarrinho key={index}>
                                        <S.Thumbnail src={item.img}></S.Thumbnail>
                                        <div>
                                            <S.Titulo>{item.roupa} - {item.tamanho}</S.Titulo>
                                            <S.Conteudo>
                                                <S.Quantidade>Quantidade: {item.quantidade}</S.Quantidade>
                                                <S.Valor>R${parseFloat(item.valor)*item.quantidade}</S.Valor>
                                            </S.Conteudo>
                                        </div>
                                    </S.CardCarrinho>
                                )
                            })}
                            <Button text='Ir para o Carrinho' width='200px' />
                        </S.BoxCarrinho>
                    </S.MainCarrinho>

                </>
            }
        </>
    )
}