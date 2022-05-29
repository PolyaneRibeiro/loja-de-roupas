import React from 'react';
import * as S from './style'

export const Button = ({text, action}) => {
    return (
        <S.Button onClick={action}>
            {text}
        </S.Button>
    )
}