import styled from 'styled-components'

export const Main = styled.div`
    background: #55474a;
    width: 100%;
    height: 157px;    
`;

export const Box = styled.div`
    display: flex;
    align-items: center ;
    justify-content: space-between;
`;

export const Logo = styled.img`
    margin-top: 15px;
`;

export const BoxMenu = styled.div`
    display: flex;
    width: 350px;
    justify-content: space-between;
    align-items: center;

    a { 
        color: #ffafb8;
        font-size: 18px;
    }
`;

export const Icon = styled.div`
background: #ffafb8;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

`;