import styled from 'styled-components';
import BgCart from '../../assets/bg-cart.svg';
import Background2 from '../../assets/bg-login2.svg';

export const Container = styled.div`
width: 100%;
min-height: 100%;
 background: linear-gradient(
  rgba(255,255,255,0.5),
  rgba(255,255,255,0.5)), url(${Background2}), no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  `;

export const Banner = styled.div`
background-image: url(${BgCart});
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 180px;

img {
 height: 150px;
}
`;

export const Title = styled.h1`
font-size:32px;
font-weight: 700;
padding-bottom: 12px;
color: #61A120;
text-transform: uppercase;
position: relative;
text-align: center;
padding: 30px;

&::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #9758a6;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 30%;
gap: 20px;
width: 100%;
max-width: 1280px;
padding: 40px;
margin: 0 auto;
`;
