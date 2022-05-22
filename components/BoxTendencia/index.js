import React from 'react';
import { Title } from '../Title';
import { Container } from '../Container';
import * as S from './style'
import { Button } from '../Button';


export const BoxTendencia = () => {
    return (
        <S.ContainerRose>
            <Container>
                <Title text1='Tendência' />
                <p>CROPET DE RENDA</p>
                <p>O cropped de renda é uma peça delicada e que voltou com força e faz a cabeça de muitas amantes da moda, já que ele pode compor diversos estilos e te levar a vários tipos de ambientes super bem vestida.</p>
                <p>Além de prático e bonito, o seu modelo vai trazer um ar feminino e sensual...</p>
                <Button text='Veja Mais'/>
            </Container>
        </S.ContainerRose>
    )
}