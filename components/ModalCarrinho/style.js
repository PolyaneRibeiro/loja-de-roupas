import styled from 'styled-components'

export const MainCarrinho = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 1220px; 
    margin: 0 auto;
`;

export const Background = styled.div`
    position: absolute;
    background: rgba(0,0,0,0.7);
    width: 100%;
    height: 100vh;
`;

export const BoxCarrinho = styled.div`
    background: #fff;
    width: 300px;
    position: absolute;
    top: 118px;
    padding: 0 10px 15px 10px;

    :before{
    top: -10px;
    right: 14px;
    width: 0;
    height: 0;
    content: " ";
    display: block;
    z-index: 12;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
}
`;

export const CardCarrinho = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 3px dotted #fde3e3;
    padding: 10px 0 10px 0;

    :last-of-type  {
        margin-bottom: 15px;
    }
`;

export const Thumbnail = styled.img`
    width: 50px;
    margin-right: 10px;
`;

export const Titulo = styled.p`
    font-family: 'Oswald', sans-serif;
    margin: 0;
    color: #ff9999;
`;

export const Valor = styled.p`
    font-family: 'Oswald', sans-serif;
    margin: 0;
    color: #988084;
`;





