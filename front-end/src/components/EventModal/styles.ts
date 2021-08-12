import { shade } from 'polished';
import styled from 'styled-components';

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.form`
    background-color: #fff;
    border-radius: 10px;
    color: #000;
    width: 450px;
    height: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: 'Bebas Neue';
        font-size: 2.5vw;
    }

    > input {
        background-color: #e5e5e5;
        border-radius: 5px;
        border: none;
        padding: 20px;
        width: 80%;
        height: 100px;
        max-width: 100%;
        margin: 20px;

        font-family: 'Roboto';
        font-size: 16px;
        color: #7d7d7d;
    }

    .inputContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin: 10px;

        input {
            background-color: #e5e5e5;
            border-radius: 5px;
            border: none;
            padding: 15px;
            width: 180px;

            font-family: 'Roboto';
            font-size: 16px;
            color: #7d7d7d;
        }

        h2 {
            font-family: 'Work Sans';
            font-size: 18px;
            margin: auto;
        }
    }

    button {
        border-radius: 5px;
        border: none;
        color: #fff;
        margin: 20px;
        transition: background-color 0.2s;

        height: 65px;
        width: 160px;
    }

    .confirmar {
        background-color: #f64b5c;
        &:hover {
            background-color: ${shade(0.2, '#f64b5c')};
        }
    }

    .cancelar {
        background-color: #7d7d7d;
        &:hover {
            background-color: ${shade(0.2, '#7d7d7d')};
        }
    }

    .actions {
        button {
            height: auto;
            width: auto;
            color: #f64b5c;
            background-color: transparent;

            display: flex;
            align-items: center;

            transition: background-color 0.2s;

            &:hover {
                color: ${shade(0.2, '#f64b5c')};
            }

            svg {
                margin-right: 16px;
            }
        }
    }
`;
