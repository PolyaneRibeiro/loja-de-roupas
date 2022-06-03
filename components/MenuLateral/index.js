import React from 'react';
import * as S from './style'
import { mockMeuLateral } from '../../utils'

export const MenuLateral = ({ action, data }) => {
    return (
        <S.Main>
            <S.TituloleCategorias>Categorias</S.TituloleCategorias>
            <S.UlCategorias>
                {mockMeuLateral.map(item => {
                    return (
                        <S.LiCategorias onClick={() => action(item.categoria)}>{item.categoria}</S.LiCategorias>

                    )
                })}
            </S.UlCategorias>
        </S.Main>
    )
}