import styled from 'styled-components';
import Background1 from '../../assets/bg-login.svg';

export const LeftContainer = styled.div`
  background: url(${Background1});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
  width: 60%;
  }
`;
