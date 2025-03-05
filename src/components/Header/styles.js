import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: rgba(17, 17, 17, 0.88);
    width: 100%;
    height: 72px;
    padding: 0 56px;
    `;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    `;
    
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        }
        
        hr {
        height: 24px;
        color: ${(props) => props.theme.white};
       }
    `;

export const HeaderLink = styled(Link)`
    text-decoration: none;
    color:  ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: 400;
    transition: color 300ms;
    color:  ${(props) => (props.$isActive ? props.theme.purple : props.theme.white)};


    &:hover {
        color: ${(props) => props.theme.purple};;
    } 
    `;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    `;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p {
        color: ${(props) => props.theme.white};
    }

    span {
        color: ${(props) => props.theme.purple};
        font-weight: 600;
    }
    `;

export const LinkContainer = styled(Link)`
    display: flex;
    gap: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.white};   
    margin-top: 3px;

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    svg {
    transition: transform 300ms ease, opacity 300ms ease;

    &:hover {
        transform: scale(1.2);
    }
  }
`;
