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
   
    background-color: #9758a6;
    color: #ffff;
    border-radius: 4px;
    font-size: 18px;
    border: none;
    transition: all 0.4 ease-in-out;

    &:hover {
        background-color: #6f3576;
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

export const Trash = styled.img`
cursor: pointer;
width: 200px;
`;
