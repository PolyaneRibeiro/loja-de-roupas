import styled from 'styled-components'

export const ContainerRose = styled.div`
    background: #ffdfe4;
    height: 410px;
`;

export const Section = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: ${({ align }) => align ? align : 'center'};
`;

export const Produtos = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   width: 75%;
   align-items: center;
`;