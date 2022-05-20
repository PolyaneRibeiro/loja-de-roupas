import React from 'react';
import { Container } from '../Container';
import * as S from './style'

export const Menu = () => {
    return (
        <S.Main>
            <Container>
                <S.Box>
                    <S.Logo src='./logo.png' />
                    <S.BoxMenu>
                        <a href='#'>HOME</a>
                        <a href='#'>TENDÊNCIAS</a>
                        <a href='#'>LOJA</a>
                    </S.BoxMenu>
                </S.Box>
            </Container>
        </S.Main>
    )
}