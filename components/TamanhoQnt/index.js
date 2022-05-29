import React from 'react';
import { Container } from '../Container';
import * as S from './style'

export const TamanhoQnt = () => {
    return (
        <S.Main>
            <S.Box>
                <S.SubTitulo>Tamanho</S.SubTitulo>
                <S.Section justify='start'>
                    <S.Tamanhos>P</S.Tamanhos>
                    <S.Tamanhos>M</S.Tamanhos>
                    <S.Tamanhos>G</S.Tamanhos>
                </S.Section>
            </S.Box>
            <S.Box>
                <S.SubTitulo>Quantidade</S.SubTitulo>
                <form>
                    <S.InputQnt />
                </form>
            </S.Box>
        </S.Main>
    )
}