import styled from 'styled-components';

export const Container = styled.div`
border-radius: 20px;
display: flex;
flex-direction: column;
background-color: rgb(240, 238, 238);
margin-bottom: 20px;

*{
    font-family:${(props) => props.theme.latoFont}; 
}

.container-top {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
    'title title'
    'items items-price'
    'delivery delivery-tax';

    .title {
        grid-area: title;
        padding: 16px;
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: bold;
        text-align: center;
        background-color: ${(props) => props.theme.secondLigthGray};
        color: ${(props) => props.theme.white};
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .items {
        grid-area: items;
        font-weight: 400;
        font-family:${(props) => props.theme.latoFont}; 
        padding-left: 20px;
        margin-left: 15px;
    }
    .items-price {
        grid-area: items-price;
        padding-right: 20px;
    }

    .delivery {
        grid-area: delivery;
        font-weight: 400;
        padding-left: 20px;
        margin-left: 15px;

    }
    .delivery-tax {
        grid-area: delivery-tax;
        padding-right: 20px;
    }
}

.container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
    margin: 20px;
    padding: 20px;
}
`;
