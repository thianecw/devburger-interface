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
  rgba(255,255,255,0.5)), url(${Background2}), no-repeat;
  background-position: center;
  background-size: cover;
`;
