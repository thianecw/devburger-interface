import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
display: flex;
flex-direction: column;

img {
    display: flex;
    margin-top: 100px;
     width: 200px;
    }

p {
     color: ${(props) => props.theme.secondWhite};
     font-size: 22px;
     gap: 50px;
     font-weight: 300;
     margin-left: 20px;
 }`;

export const NavLinkContainer = styled.div``;
export const FooterNavLink = styled.div``;

export const Footer = styled.div``;

export const NavLink = styled(Link)`
 display: flex;
 flex-direction: column;
  color: ${(props) => props.theme.secondWhite};
     font-size: 20px;
     font-weight: 300;
     margin-left: 20px;
     text-decoration: none;
     padding: 10px
     `;
