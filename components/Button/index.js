import React from 'react';
import * as S from './style'

export const Button = ({ text, action, width }) => {
    return (
        <S.Button onClick={action} width={width}>
            {text}
        </S.Button>
    )
}