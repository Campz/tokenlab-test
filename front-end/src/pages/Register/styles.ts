import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;

    background: linear-gradient(143.12deg, #f17e5f 0.75%, #f8375a 100%);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    background-color: #fff;
    border-radius: 10px;

    margin: auto;
    margin-top: 8vh;

    width: 100%;
    max-width: 540px;

    img {
        margin-top: 60px;
    }

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            font-family: 'Bebas Neue';
            font-size: 48px;
        }

        h2 {
            font-size: 18px;
            margin-top: 33px;
        }

        a {
            color: #f8375a;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.2s;
            margin-left: 30%;
            margin-top: 33px;

            display: flex;
            align-items: center;

            svg {
                margin-right: 16px;
            }

            &:hover {
                color: ${shade(0.2, '#f8375a')};
            }
        }
    }
`;
