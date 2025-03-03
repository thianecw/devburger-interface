import styled from 'styled-components';
import BannerMenu from '../../assets/banner-menu.svg';
import Background2 from '../../assets/bg-login2.svg';
import { Link } from 'react-router-dom';

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 480px;
width: 100%;
position: relative;

background-image: url(${BannerMenu});
background-size: cover;
background-position: center;
background-color:rgb(65, 65, 65);


h1 {
font-family: "Road Rage", sans-serif;
text-transform: uppercase;
font-size: 80px;
line-height: 70px;
font-weight: 200;
color: white;
position: absolute;
right: 20%;
top: 20%;
text-align: center;

span {
display: block;
color: white;
font-size: 20px;
font-family: "Poppins", serif;
font-weight: 200;
}
}
`;

export const Container = styled.div`
width: 100%;
min-height: 100vh;
 background: linear-gradient(
  rgba(255,255,255,0.5),
  rgba(255,255,255,0.5)), url(${Background2}), no-repeat;
  background-size: cover;
  padding-top: 50px; 
  background-attachment: fixed;
`;

export const BackButtonContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;

export const BackButton = styled.button`
background-color: #9758A6;
color: white;
font-size: 18px;
font-weight: 400;
text-decoration: none;
border: none;
height: 35px;
width: 100px;
border-radius: 10px;
margin-bottom: 40px;
transition: all 0.4 ease-in-out;


&:hover {
  background-color: #6F3576;
    transition: 0.5s;
}
`;

export const CategoryButton = styled(Link)`
text-decoration: none;
font-weight: 500;
font-size: 18px;
color:  ${(props) => (props.$isActive ? '#FF8C05' : '#6F3576')};
border-bottom: ${(props) => (props.$isActive ? '2px solid #FF8C05' : 'none')};
`;

export const MenuCategories = styled.div`
display: flex;
justify-content: center;
gap: 50px;
padding-top: 20px;

`;

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
justify-content: center;
max-width: 1280px;
gap:100px;
margin: 0px auto;
padding: 80px 40px 40px 40px;
`;
