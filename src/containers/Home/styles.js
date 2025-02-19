import styled from 'styled-components';
import Background2 from '../../assets/bg-login2.svg';
import BannerHome from '../../assets/banner-home.svg';

export const Banner = styled.div`
background-image: url(${BannerHome});
background-size: cover;
background-position: center;
height: 480px;
`;

export const Container = styled.section`
background: linear-gradient(
  rgba(255,255,255,0.5),
  rgba(255,255,255,0.5)
), url(${Background2});
height: 500px;
background-size: cover;

img {
  height: 100%;
  width: 100%;
}

p {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

export const Content = styled.div`

`;

export const Footer = styled.div`
background-color:#5C2669;
color: white;
font-size: 15px;
padding: 10px 0 10px 0;
text-align: center;
`;
