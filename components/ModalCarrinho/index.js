import React, { useState } from 'react';
import { Container } from '../Container';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MockProduct } from '../../utils'
import * as S from './style'

export const ModalCarrinho = ({ open, close }) => {
    return (
        <>
            {open &&
                <S.BoxCarrinho>
                <p onClick={close}>fechar</p>
                </S.BoxCarrinho>
                
            }
        </>
    )
}