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
                        <S.Icon>
                        <AiOutlineShoppingCart color="#55474a" size={30} />
                        </S.Icon>
                    </S.BoxMenu>
                </S.Box>
            </Container>
        </S.Main>
    )
}