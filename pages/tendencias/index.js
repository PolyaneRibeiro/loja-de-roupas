import React, { useState, useEffect } from 'react';
import { CardTendencia } from '../../components/CardTendencia';
import { Titulo } from '../../components/Titulo';
import { Container } from '../../components/Container';
import * as S from '../style'

export default function Tendencias() {

  return (
    <Container>
      <Titulo text1='Tendências' />
      <CardTendencia
        tituloTendencia='CROPET DE RENDA'
        img='./cropet.jpg'
      >
        <p>O cropped de renda é uma peça delicada e que voltou com força nesse verão e faz a cabeça de muitas amantes da moda, já que ele pode compor diversos estilos e te levar a vários tipos de ambientes super bem vestida.</p>
        <p>Além de prático e bonito, o seu modelo vai trazer um ar feminino e sensual. Uma regrinha de ouro para se usar essa peça, é lembrar de tomar cuidado com a transparência. Se optar por um que tenha forro garanta, que sejam da mesma cor (forro e pano da blusinha) caso não, escolha um top que combine.</p>
        <p>Esta é uma peça tão eclética que pode servir a vários gostos. Por exemplo, se você deseja destacar os seios, ou a barriga, poderá encontrar modelos que de cropped que te ajudarão nessa missão.</p>
      </CardTendencia>
    </Container>
  )
}
