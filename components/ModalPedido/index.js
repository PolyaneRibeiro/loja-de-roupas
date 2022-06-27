import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { VscError } from 'react-icons/vsc';
import { Button } from '../Button';
import * as S from './style'


export const ModalPedido = ({ open, success, action }) => {
    return (
        <>
            {open &&
                <>
                    <S.Background></S.Background>
                    <S.Main>
                        {success ? (
                            <>
                                <BsCheckCircle color="#ff9999" size={40} />
                                <S.Destaque> Seu pedido foi enviado com SUCESSO para o vendedor.</S.Destaque>
                                <p><b> Em breve ele entrará em contato.</b></p>
                                <p> Continue navegando pelo nosso site e veja as TENDÊNCIAS para esse ano.</p>
                            </>
                        ) : (
                            <>
                                <VscError color="#ff9999" size={40} />
                                <S.Destaque> Tivemos algum problema na hora de enviar seu pedido.</S.Destaque>
                                <p><b> Tente novamente mais tarde.</b></p>
                                <Button text='ok' action={action} width='78px' />
                            </>
                        )}
                    </S.Main>
                </>
            }
        </>
    )
}