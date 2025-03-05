import styled from 'styled-components';
import Background2 from '../../assets/bg-login2.svg';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
`;

export const RigthContainer = styled.div`
background: url(${Background2});
background-size: cover;
background-position: center;
background-color: #1e1e1e;
height: 100%;
width: 100%;
max-width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

  p {
font-family: ${(props) => props.theme.poppinsFont};
color: ${(props) => props.theme.white};
font-weight: 600;
  }

  a {
cursor: pointer;
text-decoration: underline;
font-weight: 200;
  }
  `;

export const Title = styled.h2`
color: ${(props) => props.theme.white};
font-family: ${(props) => props.theme.roadRageFont};
font-size: 40px;
font-weight: 300;
line-height: 40px;

span {
    color: ${(props) => props.theme.purple};
    font-family: ${(props) => props.theme.roadRageFont};

}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 40px;
padding: 20px;
width: 100%;
max-width: 40%;
font-family: ${(props) => props.theme.poppinsFont};
color: ${(props) => props.theme.white};
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 0 15px;
}

label {
    font-size: 18px;
    font-weight: 600;
    font-weight: 300;
}

p {
  color:rgb(207, 24, 70);
  font-size: 14px;
  font-weight: 300;
  height: 10px;
}

`;

export const Link = styled(ReactLink)`
text-decoration: none;
color: ${(props) => props.theme.white};

`;

export const Footer = styled.div`
${(props) => props.theme.darkRed};
`;
