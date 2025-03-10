import styled from 'styled-components';
import Select from 'react-select';

export const ProductImg = styled.img`
height:60px;
padding: 12px;
border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
width: 240px;
`;

export const Filter = styled.div`
display: flex;
justify-content: center;
margin: 28px 0;
gap: 50px;
`;

export const FilterOptions = styled.div`
cursor: pointer;
background-color: none;
border: none;
color: ${(props) => (props.$isActiveStatus ? props.theme.purple : props.theme.darkGray)};
font-weight: ${(props) => (props.$isActiveStatus ? 'bold' : '500')};
font-size: 16px;
`;
