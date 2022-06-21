import React, { useState, useEffect } from 'react';
import { CardTendencia } from '../../components/CardTendencia';
import { Titulo } from '../../components/Titulo';
import { Container } from '../../components/Container';
import { mockTendencia } from '../../utils';
import * as S from '../style'


export default function Tendencias() {
  console.log(mockTendencia, 'mockTendencia')
  return (
    <Container>
      <Titulo text1='Tendências' />
      {mockTendencia.map(item => {
        return (
          <CardTendencia
            looks={item.looks}
            tituloTendencia={item.titulo}
            descricao={item.descricao}
            img={item.imagem}
          />
        )
      })}
    </Container>
  )
}
