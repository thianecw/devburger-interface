import styled from 'styled-components';

export const Container = styled.div`
padding-left: 30px;

.carousel-item {
    padding-right: 40px;
}

overflow-x: hidden;

.react-multi-carousel-item {
    overflow: visible;
}

padding-left: 40px;


`;

export const Title = styled.h2`
color: #61A120;
text-transform: uppercase;
font-size: 32px;
line-height: 48px;
text-align: center;
padding-bottom: 12px;
position: relative;
margin: 70px 0; 

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61A120;
    left: 50%;
    transform: translateX(-50%);
}
`;

// export const ContainerItems = styled.div`
// background: url('${(props) => props.imageUrl}'),no-repeat;
// background-position: center;
// background-size: cover;
// display: flex;
// align-items: center;
// padding: 20px 10px;
// height: 250px;
// width: 100%;

// border-radius: 20px;

// p {
//     color: white;
//     font-weight: 700;
//     font-size: 20px;
//     text-align: center;
//     background-color: rgba(0,0,0,0.5);
//     border-radius: 30px;
//     padding: 10px 30px;
//     margin-top: 50px;
// }
// `;
