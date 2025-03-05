import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding:20px;
    border-radius: 28px;
    background-color: ${(props) => props.theme.white};
    position: relative;
    max-width: 315px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    div{
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;

        p{
            font-size: 18px;
            color:${(props) => props.theme.orange};
            font-weight: 700;
            line-height: 20px;
            margin-top: 47px;
            font-size: 18px;
        }

        strong{
            font-size: 18px;
            font-weight: 800;
            color:${(props) => props.theme.black};
            line-height: 20px;
        }
    }

`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top:-50px;
`;
