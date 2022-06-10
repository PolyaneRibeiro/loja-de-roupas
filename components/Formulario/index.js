import React, { useEffect, useState } from 'react';

import * as S from './style'


export const Formulario = () => {
    return (
        <S.BoxForm>
            <S.Item><label>Nome:</label><S.Input /> </S.Item>
            <S.BoxCelCpf>
                <S.Item><label>Telefone:</label><S.InputPequeno /> </S.Item>
                <S.Item><label>CPF:</label><S.InputPequeno /></S.Item>
            </S.BoxCelCpf>
            <S.Item><label>Endereço:</label><S.Input /></S.Item>
        </S.BoxForm>
    )
}