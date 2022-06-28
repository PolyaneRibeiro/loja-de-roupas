import React from 'react';
import * as S from './style'
import { mockMeuLateral } from '../../utils'

export const MenuLateral = ({ action, actionTodos, active }) => {
    return (
        <S.Main>
            <S.TituloleCategorias>Categorias</S.TituloleCategorias>
            <S.UlCategorias>
                <S.LiCategorias onClick={actionTodos} active={active === 'todos'}>Ver Todos</S.LiCategorias>
                {mockMeuLateral.map(item => {
                    return (
                        <S.LiCategorias
                            onClick={() => action(item.value)}
                            active={active === item.value}
                        >
                            {item.categoria}
                        </S.LiCategorias>
                    )
                })}
            </S.UlCategorias>
        </S.Main>
    )
}