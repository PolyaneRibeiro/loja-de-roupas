import React, { useEffect, useState } from 'react';
import { Button } from '../Button'
import { mockPecasExclusivas } from '../../utils'
import axios from 'axios';
import * as S from './style'


export const ModalCarrinho = ({ open, close }) => {
    const [carrinho, setCarrinho] = useState()

    useEffect(() => {
        axios.get('https://poly-2af89-default-rtdb.firebaseio.com/carrinho.json')
            .then((response) => {
                setCarrinho(Object.entries(response.data))
            })
    }, []);

    return (
        <>
            {open &&
                <>
                    <S.Background onClick={close}></S.Background>
                    <S.MainCarrinho onClick={laranja}>
                        <S.BoxCarrinho>
                            {mockPecasExclusivas.map((item, index) => {
                                return (
                                    <S.CardCarrinho key={index}>
                                        <S.Thumbnail src={item.img}></S.Thumbnail>
                                        <div>
                                            <S.Titulo>{item.roupa} - P</S.Titulo>
                                            <S.Conteudo>
                                                <S.Quantidade>Quantidade: 1</S.Quantidade>
                                                <S.Valor>{item.valor}</S.Valor>
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