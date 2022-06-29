import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import * as S from './style'

export const Breadcrumb = ({ categoria, categoriaLink, produto }) => {
    return (
        <S.Main>
            <S.Loja href='/loja'><IoIosArrowForward />Loja</S.Loja>
            <S.Categoria href={`/loja?${categoriaLink}`}><IoIosArrowForward />{categoria}</S.Categoria>
            <S.Produto><IoIosArrowForward />{produto}</S.Produto>
        </S.Main>
    )
}