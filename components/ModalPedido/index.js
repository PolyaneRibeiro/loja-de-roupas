import React from 'react';
import * as S from './style'


export const ModalPedido = ({ open, close }) => {
    return (
        <>
            {open &&
                <>
                    <S.Background onClick={close}></S.Background>
                    <S.Main>
                        <S.Destaque> Seu pedido foi enviado com SUCESSO para o vendedor.</S.Destaque>
                        <p><b> Em breve ele entrará em contato.</b></p>
                        <p> Continue navegando pelo nosso site e veja as TENDÊNCIAS para esse ano.</p>
                    </S.Main>
                </>
            }
        </>
    )
}