import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
background-color: ${(props) => props.theme.secondBlack};
align-items: center;

img {
    margin-top: 50px;
     width: 150px;
    }

    h1 {
        color: ${(props) => props.theme.secondWhite};
        font-weight: 500;
        font-family:${(props) => props.theme.latoFont};
        margin-bottom: 20px;
    }
`;

export const NavLinkContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 20px;
`;

export const NavLink = styled(Link)`
 display: flex;
  color: ${(props) => props.theme.secondWhite};
  gap: 12px;
  padding: 12px 10px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 300;
  margin-left: 20px;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.purple : 'transparent')};

  &:hover{
    background-color: ${(props) => props.theme.purple};
  }
     `;

export const Footer = styled.footer`
width: 100%;
margin-top: auto;
`;
