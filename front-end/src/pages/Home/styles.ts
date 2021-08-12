import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    padding: 16px 130px 16px 130px;
    filter: drop-shadow(0 4px 0px rgba(0, 0, 0, 0.25));

    div {
        display: flex;
        align-items: center;
        cursor: pointer;

        transition: color 0.2s;

        &:hover {
            color: #f64b5c;
        }

        h1 {
            font-size: 20px;
        }

        svg {
            margin-left: 22px;
            max-height: 24px;
            max-width: 24px;
        }
    }
`;

export const Banner = styled.div`
    position: relative;

    img {
        width: 100%;
    }

    div {
        position: absolute;
        top: 0;
        left: 0;
        padding: 48px 130px 16px 130px;
        h1 {
            font-family: 'Bebas Neue';
            font-size: 6vw;
            color: #fff;
        }

        h2 {
            font-family: 'Bebas Neue';
            font-size: 3vw;
            color: #fff;
        }
    }
`;

export const Content = styled.div`
    padding: 0 130px 70px 130px;

    h1 {
        font-family: 'Work Sans';
        font-size: 34px;
    }

    .btContainer {
        display: flex;
        justify-content: flex-end;

        Button {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 10vw;

            svg {
                margin-right: 5px;
            }
        }
    }
`;

export const Events = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    margin-top: 20px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    div {
        display: flex;
    }

    .eventContainer {
        background: #fff;
        cursor: pointer;
        height: 160px;
        width: 42vw;

        &:hover {
            .date {
                background-color: ${shade(0.2, '#f64b5c')};
            }
        }
    }

    .date {
        height: 160px;
        width: 160px;
        flex-direction: column;
        background-color: #f64b5c;
        color: #fff;
        align-items: center;
        justify-content: center;

        transition: background-color 0.2s;

        h1 {
            font-family: 'Work Sans';
            font-size: 64px;
        }

        h2 {
            font-family: 'Work Sans';
            font-size: 36px;
        }
    }

    .details {
        padding: 32px;
        flex-direction: column;
        justify-content: space-between;

        p {
            font-family: 'Roboto';
            font-style: 18px;
            color: #373737;
            margin-left: 10px;
        }
    }
`;
