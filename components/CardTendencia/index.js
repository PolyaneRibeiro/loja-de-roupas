import React from 'react';
import { Container } from '../Container';
import * as S from './style'

export const CardTendencia = ({
    tituloTendencia,
    children,
    img,
}) => {
    return (
        <Container>
            <S.BoxContent>
                <div>
                    <S.BoxText>
                        <h2>{tituloTendencia}</h2>
                        {children}
                    </S.BoxText>
                </div>
                <S.ImgTendencia src={img} />
            </S.BoxContent>
        </Container>
    )
}