import styled from 'styled-components'       

export const Main = styled.div`
    width: 1220px; 
    margin: 0 auto;
    margin-bottom: ${({ bottom }) => bottom ? bottom : '70px'}   
`;

