import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 20px;
border-radius: 8px;
background-color: white;

div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

p {
    color: #ff8c05;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    margin: 20px 0 10px 0;
    align-items: start;
}

strong {
    font-size: 22px;
    color: #363636;
    font-weight: 800;
    line-height: 20px;
}
`;

export const CardImage = styled.img`
height: 100px;
position: absolute;
top: -50px;
`;
