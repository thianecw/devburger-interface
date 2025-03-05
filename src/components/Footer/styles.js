import styled from 'styled-components';

export const Container = styled.div`
background-color: ${(props) => props.theme.secondDarkPurple};
color: ${(props) => props.theme.white};
width: 100vw;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 300;
`;
