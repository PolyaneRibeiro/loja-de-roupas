import React from 'react';
import * as S from './style'

export const Container = ({children, bottom}) => {
    return (
        <S.Main bottom={bottom}>
            {children}
        </S.Main>
    )
}