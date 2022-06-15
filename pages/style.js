import styled from 'styled-components'

//geral
export const Section = styled.div`
   display: flex;
   justify-content: ${({ justify }) => justify ? justify : 'space-between'};
   align-items: ${({ align }) => align ? align : 'center'};
   flex-wrap: ${({ wrap }) => wrap ? wrap : ''};
`;

//home
export const ContainerRose = styled.div`
    background: #ffdfe4;
    height: 410px;
`;

export const ImgBanner = styled.img`
    cursor: pointer;
`;


//pg loja
export const Produtos = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 75%;
   align-items: center;
`;

//pg Produto
export const Conteudo = styled.div`
    margin-left: 30px;
`;

export const Valor = styled.p`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    color: #988084;
    margin: 0;
`;

export const ImgRoupa = styled.img`
    margin-top: 50px;
`;

export const Descricao = styled.p`
    line-height: 22px;    
`;

//pg fechar pedido
export const ProdutosPedido = styled.div`
   width: 55%;
`;

export const FecharPedido = styled.div`
   width: 40%;
`;

export const Total = styled.p`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    color: #988084;
    text-align: center;

    span{
        color: #ff9999;
    }
`;

