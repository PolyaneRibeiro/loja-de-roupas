import React from 'react';
import { Container } from '../Container';

import * as S from './style'

export const CardTendencia = ({
    tituloTendencia,
    descricao,
    img,
    looks
}) => {
    return (
        <Container>
            <S.BoxTendencia>
                <S.BoxContent>
                    <S.BoxText>
                        <S.Titulo>{tituloTendencia}</S.Titulo>
                        {descricao.map(item => {
                            return (
                                <p>{item}</p>
                            )
                        })}
                    </S.BoxText>
                    <S.ImgTendencia src={img} />
                </S.BoxContent>
                <h2>#OPÇÕES DE LOOKS</h2>
                <S.BoxReferencias>
                    {looks?.map(item => {
                        return (
                            <div>
                                <img src={item.img} />
                                <p>{item.texto}</p>
                            </div>
                        )
                    })
                    }
                </S.BoxReferencias>
            </S.BoxTendencia>
        </Container>
    )
}