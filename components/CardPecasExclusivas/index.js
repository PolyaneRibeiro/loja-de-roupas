import React from 'react';
import { Button } from '../Button';
import * as S from './style'

export const CardPecasExclusivas = ({ img, value, clothing }) => {
    return (
        <S.Box>
            <img src={img} />
            <S.Title>{clothing}</S.Title>
            <S.Value>{value}</S.Value>
            <Button text='Saiba Mais' />
        </S.Box>
    )
}