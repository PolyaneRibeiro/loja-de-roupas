import React from 'react';
import { Button } from '../Button';
import * as S from './style'

export const CardProdutos = ({ img, valor, roupa, action, margin }) => {
    return (
        <S.Box margin={margin}>
            <img src={img} />
            <S.Titulo>{roupa}</S.Titulo>
            <S.Valor>{valor}</S.Valor>
            <Button text='Ver Produto' action={action} />
        </S.Box>
    )
}