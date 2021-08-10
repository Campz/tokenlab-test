import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #E5E5E5;
        color: #000000;
    }

    body, input, button {
        font-family: 'Roboto', serif;
        font-size: 18px;
    }

    button {
        cursor: pointer;
    }
`;
