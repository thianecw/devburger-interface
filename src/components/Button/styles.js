import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
    transition: 0.5s;
  }

  &:active {
    transform: scale(0.96);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    animation: ease-in-out;
  }
`;
