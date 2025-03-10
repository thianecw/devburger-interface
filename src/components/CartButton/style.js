import styled from 'styled-components';

export const ContainerButton = styled.button`
background-color: ${(props) => props.theme.purple};
height: 40px;
width: 100%;
border: none;
border-radius: 8px;
color: ${(props) => props.theme.white};

&:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
    transition: 0.5s;

    &:active {
    transform: scale(0.96);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    animation: ease-in-out;
  }
}
`;
