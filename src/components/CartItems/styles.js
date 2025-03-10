import styled from 'styled-components';

export const ProductImg = styled.img`
height: 70px;
width: 80px;
border-radius: 20px;
`;

export const ButtonGroup = styled.div`
display: flex;
align-items: center;
gap: 12px;


button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
   
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white}f;
    border-radius: 4px;
    font-size: 18px;
    border: none;
    transition: all 0.4 ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.secondDarkPurple};
        transition: 0.5s;   
    }

    &:active {
    transform: scale(0.90);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    animation: ease-in-out;
   }
}
`;

export const EmptyCart = styled.p`
font-size:18px;
padding: 20px;
font-weight: bold;
`;

export const TotalPrice = styled.p`
font-weight: bold;
`;

export const Trash = styled.image`
cursor: pointer;
width: 200px;
&:hover {
 transform: scale(1.1) translateZ(10px);
}

`;
