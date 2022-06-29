import React, { useEffect, useState } from 'react';

import * as S from './style'


export const Formulario = ({ nome, telefone, email, endereco, validacaoNome, validacaoTel, validacaoEmail, validacaoEnd }) => {
    return (
        <S.BoxForm>
            <S.Item><label>Nome:</label><S.Input onChange={nome} /> </S.Item>
            {validacaoNome && <S.Validacao>*Digite seu nome</S.Validacao>}
            <S.BoxCelCpf>
                <S.Item><label>Telefone:</label>
                    <S.InputPequeno onChange={telefone} />
                    {validacaoTel && <S.Validacao>*Digite seu telefone</S.Validacao>}
                </S.Item>
                <S.Item>
                    <label>E-mail:</label><S.InputPequeno onChange={email} />
                    {validacaoEmail && <S.Validacao>*Digite seu E-mail</S.Validacao>}
                </S.Item>
            </S.BoxCelCpf>
            <S.Item><label>Endereço:</label><S.Input onChange={endereco} />
                {validacaoEnd && <S.Validacao>*Digite seu Endereço</S.Validacao>}
            </S.Item>
        </S.BoxForm>
    )
}