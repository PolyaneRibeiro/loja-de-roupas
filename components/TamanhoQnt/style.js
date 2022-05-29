import styled from 'styled-components'

export const Main = styled.div`
   margin-bottom: 30px;
`;

export const Section = styled.div`
   display: flex;
   justify-content: 'space-between'};
   align-items: center;
`;

export const SubTitulo = styled.p`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #ff9999;
    margin-bottom: 10px;
`;

export const Tamanhos = styled.button`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #988084;
    border: 1px solid #988084;
    width: 30px;
    height: 30px;
    text-align: center;
    margin-right: 10px;
    margin-top: 0;
    cursor: pointer;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        background: #ff9999;
        color: #fff;
        border: 0;
    }
`;