import React from 'react';
import { Container } from '../Container';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import * as S from './style'

export const Menu = () => {
    return (
        <S.Main>
            <Container>
                <S.Box>
                    <S.Logo src='./logo.png' />
                    <S.BoxMenu>
                        <a href='/'>HOME</a>
                        <a href='#'>TENDÊNCIAS</a>
                        <a href='/loja'>LOJA</a>
                        <AiOutlineShoppingCart color="#ffafb8" size={30} />
                    </S.BoxMenu>
                </S.Box>
            </Container>
        </S.Main>
    )
}