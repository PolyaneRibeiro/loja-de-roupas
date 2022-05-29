import styled from 'styled-components'

export const BoxCarrinho = styled.div`
    background: #ffafb8;
    width: 300px;
    position: absolute;
    top: 150px;

    :before{
    top: -10px;
    right: 24px;
    width: 0;
    height: 0;
    content: " ";
    display: block;
    z-index: 12;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ffafb8;
}
`;



