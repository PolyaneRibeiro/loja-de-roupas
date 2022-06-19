import styled from 'styled-components'

export const BoxContent = styled.div`
   display: flex;
   flex-direction: ${({ direction }) => direction ? direction : 'row'};
   margin-top: ${({ topBox }) => topBox ? topBox : '0'};
   align-items:  ${({ alignBox }) => alignBox ? alignBox : 'flex-start'};
`;

export const BoxText = styled.div`
    margin-bottom: 40px;
`;

export const ImgTendencia = styled.img`
   margin-top: ${({ topImg }) => topImg ? topImg : '0'};
   margin-left: 30px;
`;


