import styled from 'styled-components';

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
    padding: 70px 130px 70px 130px;

    h1 {
        font-family: 'Work Sans';
        font-size: 34px;
    }
`;
