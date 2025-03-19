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

export const Filter = styled.div`
display: flex;
justify-content: center;
margin: 28px 0;
gap: 50px;
`;

export const FilterOptions = styled.button`
cursor: pointer;
background-color: none;
border: none;
color: ${(props) => (props.$isActiveStatus ? props.theme.purple : props.theme.darkGray)};
font-weight: ${(props) => (props.$isActiveStatus ? 'bold' : '500')};
font-size: 16px;`;
