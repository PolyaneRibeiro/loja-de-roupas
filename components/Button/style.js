import styled from 'styled-components'

export const Button = styled.button`
    width: ${({ width }) => width ? width : '150px'};
    height: 42px;
    background-color: #ffafb8;
    color: #fff;
    border: none;
    border-radius: 15px;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    cursor: pointer;
`;

