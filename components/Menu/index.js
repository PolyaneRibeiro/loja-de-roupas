import React, { useState } from 'react';
import { Container } from '../Container';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ModalCarrinho } from '../ModalCarrinho';
import * as S from './style'

export const Menu = ({ open, setOpen, mapeamento }) => {
    return (
        <>
            <ModalCarrinho open={open} close={() => setOpen(false)} mapeamento={mapeamento} />
            <S.Main>
                <Container>
                    <S.Box>
                        <S.Logo src='./logo.png' />
                        <S.BoxMenu>
                            <a href='/'>HOME</a>
                            <a href='#'>TENDÊNCIAS</a>
                            <a href='/loja'>LOJA</a>
                            <S.Icon onClick={() => setOpen(!open)}>
                                <AiOutlineShoppingCart color="#55474a" size={30} />
                            </S.Icon>
                        </S.BoxMenu>
                    </S.Box>
                </Container>
            </S.Main>
        </>
    )
}