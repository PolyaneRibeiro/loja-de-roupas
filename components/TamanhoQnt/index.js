import React from 'react';
import * as S from './style'

export const TamanhoQnt = ({ onChange, setTamanho, tamanho, validacao }) => {
    return (
        <S.Main>
            <S.Box>
                <S.SubTitulo>Tamanho</S.SubTitulo>
                <S.Section justify='start'>
                    <S.Tamanhos onClick={() => setTamanho('P')} active={tamanho === 'P'}>P</S.Tamanhos>
                    <S.Tamanhos onClick={() => setTamanho('M')} active={tamanho === 'M'}>M</S.Tamanhos>
                    <S.Tamanhos onClick={() => setTamanho('G')} active={tamanho === 'G'}>G</S.Tamanhos>
                </S.Section>
                {validacao && <S.Validacao>*Selecione um tamanho</S.Validacao>}
            </S.Box>
            <S.Box>
                <S.SubTitulo>Quantidade</S.SubTitulo>
                <form>
                    <S.InputQnt type='number' min='1' placeholder='1' onChange={onChange} />
                </form>
            </S.Box>
        </S.Main>
    )
}