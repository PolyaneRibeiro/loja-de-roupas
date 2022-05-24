import React from 'react';
import { Container } from '../Container';
import { Button } from '../Button';
import * as S from './style'

export const BoxTendencia = ({
    titleCategory,
    titleTendencia,
    text1,
    text2,
    img,
    topImg,
    direction,
    topBox,
    rightImg,
    alignBox
}) => {
    return (
        <Container>
            <S.BoxContent direction={direction} topBox={topBox} alignBox={alignBox}>
                <div>
                    <S.BoxText>
                        {titleCategory}
                        <h2>{titleTendencia}</h2>
                        <p>{text1}</p>
                        <p>{text2}</p>
                    </S.BoxText>
                    <Button text='Veja Mais' />
                </div>
                <S.ImgTendencia src={img} topImg={topImg} rightImg={rightImg} />
            </S.BoxContent>
        </Container>
    )
}