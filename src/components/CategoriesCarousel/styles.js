import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }

    padding-left:40px;

    .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
}
    .react-multiple-carousel__arrow--right {
      top: 10px;
}


`;
export const Title = styled.h2`
    font-size:32px;
    font-weight:800;
    color:#9758a6;
    padding-top: 20px;
    padding-bottom:12px;
    text-align: center;
    position: relative;
    margin-bottom: 40px;
    text-transform: uppercase;
    
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
export const ContainerItems = styled.div`

    background: url('${(props) => props.imageUrl}'),no-repeat;
    background-position: center;
    background-size:cover;
    display: flex;
    align-items: center;
    padding:20px 10px;
    width: 100%;
    height: 250px;
    border-radius: 20px;
`;

export const CategoryButton = styled(Link)`
 color:white;
        background: rgba(0,0,0,0.5);
        padding: 10px 30px;
        border-radius: 50px;
        font-size: 18px;
        font-weight: 400;
        margin-top: 100px;
        text-decoration: none;

        &:hover{
            background-color: #9758a6;
           opacity: 0.9;
        }
`;
