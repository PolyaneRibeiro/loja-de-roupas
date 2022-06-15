import React, { useEffect, useState } from 'react';
import * as S from './style'


export const ModalPedido = ({ open, close }) => {
    return (
        <>
            {open &&
                <>
                    <S.Background onClick={close}></S.Background>
                    <S.Main>
                        Seu pedido foi enviado para o vendedor.
                    </S.Main>
                </>
            }
        </>
    )
}