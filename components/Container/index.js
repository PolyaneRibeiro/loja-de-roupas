import React from 'react';
import * as S from './style'

export const Container = ({children}) => {
    return (
        <S.Main>
            {children}
        </S.Main>
    )
}