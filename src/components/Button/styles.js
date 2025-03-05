import styled from 'styled-components';

export const ContainerButton = styled.button`
width: 100%;
height: 45px;
border-radius: 5px;
border: none;
background-color: ${(props) => props.theme.purple};
color: ${(props) => props.theme.white};
font-size: 20px;

&:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};;
    transition: 0.5s;
}
`;
