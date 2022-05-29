import React from 'react';
import { Container } from '../Container';
import * as S from './style'

export const TamanhoQnt = () => {
    return (
        <S.Main>
            <S.SubTitulo>Tamanho</S.SubTitulo>
            <S.Section justify='start'>
                <S.Tamanhos>P</S.Tamanhos>
                <S.Tamanhos>M</S.Tamanhos>
                <S.Tamanhos>G</S.Tamanhos>
            </S.Section>
            <S.SubTitulo>Quantidade</S.SubTitulo>
            <form>
                <input />
            </form>
        </S.Main>
    )
}