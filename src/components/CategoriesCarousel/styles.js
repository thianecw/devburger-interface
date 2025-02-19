import styled from 'styled-components';

export const Container = styled.div`
.carousel-item {
}
`;

export const Title = styled.h2`
color: #9758A6;
text-transform: uppercase;
font-size: 32px;
line-height: 48px;
text-align: center;
padding-bottom: 12px;
position: relative;
margin-bottom: 40px;

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #9758A6;
    left: 50%;
    transform: translateX(-50%);
}
`;

export const ContainerItems = styled.div`
display: flex;
align-items: center;
padding: 20px 10px;
background: url('${(props) => props.imageUrl}');
`;
