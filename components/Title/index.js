import React from 'react';
import * as S from './style'

export const Title = ({ text1, text2 }) => {
    return (
        <S.Title>
            <S.ColorRose>#</S.ColorRose><S.ColorGray>{text1}</S.ColorGray><S.ColorRose>{text2}</S.ColorRose>
        </S.Title>
    )
}