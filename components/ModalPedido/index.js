import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import * as S from './style'


export const ModalPedido = ({ open }) => {
    return (
        <>
            {open &&
                <>
                    <S.Background></S.Background>
                    <S.Main>
                        <BsCheckCircle color="#ff9999" size={40} />
                        <S.Destaque> Seu pedido foi enviado com SUCESSO para o vendedor.</S.Destaque>
                        <p><b> Em breve ele entrará em contato.</b></p>
                        <p> Continue navegando pelo nosso site e veja as TENDÊNCIAS para esse ano.</p>
                    </S.Main>
                </>
            }
        </>
    )
}