import styled from 'styled-components'

export const ContainerRose = styled.div`
    background: #ffdfe4;
    height: 410px;
`;

export const Section = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: ${({ bottom }) => bottom ? bottom : '0'}   
`;