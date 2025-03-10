import styled from 'styled-components';
import ReactSelect from 'react-select';
import { Button } from '../../../components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
`;

export const Form = styled.form`
background-color: ${(props) => props.theme.black};
color: ${(props) => props.theme.secondWhite};
border-radius: 20px;
padding: 30px;
width: 100%;
max-width: 380px;
display: flex;
flex-direction: column;
gap: 15px;
`;

export const InputGroup = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`;

export const Label = styled.label`
color: ${(props) => props.theme.secondWhite};
font-size: 15px;
`;

export const Input = styled.input`
width: 100%;
height: 48px;
border: none;
border-radius: 6px;
padding: 0 12px;
border: none;
`;

export const ErrorMessage = styled.span`
color: ${(props) => props.theme.darkRed};
font-size: 14px;
font-weight: 600;
`;

export const LabelUpload = styled.label`
border: 1px dashed white; 
cursor: pointer;
padding: 8px;
border-radius: 6px;
color: ${(props) => props.theme.secondWhite};
margin-top: 5px;

> svg {
    margin: 5px 5px 0px 0px;
    width: 20px;
    height: 20px;
}

input {
    display: none;
}
`;

export const InputCheckBox = styled.div`
display: flex;
margin-top: 10px;

input[type="checkbox"] {
    transform: scale(1.5);
    margin-right: 10px;
    accent-color: ${(props) => props.theme.purple};
  }
`;

export const Select = styled(ReactSelect)`

`;

export const SubmitButton = styled(Button)`
font-family: ${(props) => props.theme.fontPoppins};
margin-top: 30px;

`;
