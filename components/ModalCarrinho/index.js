import React from 'react';
import { Button } from '../Button'
import { mockPecasExclusivas } from '../../utils'
import * as S from './style'


export const ModalCarrinho = ({ open, close }) => {
    return (
        <>
            {open &&
                <>
                    <S.Background onClick={close}></S.Background>
                    <S.MainCarrinho>
                        <S.BoxCarrinho>
                            {mockPecasExclusivas.map(item => {
                                return (
                                    <S.CardCarrinho>
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