import styled from 'styled-components';

export const Root = styled.table`
width: 100%;
border-collapse: collapse;
background-color: rgb(240, 238, 238);
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

*{
    font-family: "Lato", sans-serif;
}
`;

export const Body = styled.tbody`

`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
padding: 16px;
text-align: left;
background-color:rgb(98, 98, 98);
color: #ffff;
border-bottom: 1px solid #cdcdcd;
font-weight: 500;
font-size: 16px;


&:last-child {
    border-top-right-radius: 20px;
}

&:first-child {
    border-top-left-radius: 20px;

}
`;

export const Td = styled.td`
padding: 16px;
color: #484848;
font-weight: 500;
line-height: 110%;
`;
