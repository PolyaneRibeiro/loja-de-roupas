import React from 'react';
import { Container } from '../Container';
import * as S from './style'

export const Rodape = () => {
    return (
        <S.Main>
            <Container bottom='0'>
                <S.Box>
                    <div>
                        <p>Rua Regente Feijó - 187, Roncon |  01130-000 - Ribeirão Pires/SP</p>
                        <S.Copyright>© Copyright 2022. Todos os direitos reservados. Poly vista-se bem.</S.Copyright>
                    </div>
                    <p>11 96859-1353</p>
                </S.Box>
            </Container>
        </S.Main>
    )
}