import React, { useState, useEffect } from 'react';
import { Container } from '../Container';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ModalCarrinho } from '../ModalCarrinho';
import * as S from './style'

export const Menu = ({ open, setOpen, mapeamento }) => {
    const [carrinho, setCarrinho] = useState()

    useEffect(() => {
        setTimeout(() => {
            const response = typeof window !== "undefined" && localStorage.getItem('carrinho')
            setCarrinho(JSON.parse(response))
        }, 30)
    }, [mapeamento]);

    return (
        <>
            <ModalCarrinho
                open={open}
                close={() => setOpen(false)}
                mapeamento={mapeamento}
                carrinho={carrinho}
            />
            <S.Main>
                <Container>
                    <S.Box>
                        <S.Logo src='./logo.png' />
                        <S.BoxMenu>
                            <a href='/'>HOME</a>
                            <a href='/tendencias'>TENDÊNCIAS</a>
                            <a href='/loja'>LOJA</a>
                            <S.BoxIcon>
                                {carrinho?.length > 0 && <S.Quantidade>{carrinho?.length}</S.Quantidade>}
                                <S.Icon onClick={() => setOpen(!open)}>
                                    <AiOutlineShoppingCart color="#55474a" size={30} />
                                </S.Icon>
                            </S.BoxIcon>
                        </S.BoxMenu>
                    </S.Box>
                </Container>
            </S.Main>
        </>
    )
}