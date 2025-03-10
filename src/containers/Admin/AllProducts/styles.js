import styled from 'styled-components';

export const Container = styled.div`

`;

export const ProductImg = styled.img`
height: 60px;
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
`;

export const EditButton = styled.image`
cursor: pointer;
border: 0;
background-color: ${(props) => props.theme.darkWhite};
height: 32px;
border-radius: 8px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;

&:hover {
 transform: scale(1.1) translateZ(10px);
 color: ${(props) => props.theme.purple};
}

`;
