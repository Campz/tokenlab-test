import React from 'react';

import { FiLogOut } from 'react-icons/fi';
import { Container, Header, Banner, Content } from './styles';

import logoImg from '../../assets/logo.svg';
import homeImg from '../../assets/home-image.png';

const Home: React.FC = () => {
    return (
        <Container>
            <Header>
                <img src={logoImg} alt="logo" />
                <div>
                    <h1>Rafael</h1>
                    <FiLogOut />
                </div>
            </Header>
            <Banner>
                <img src={homeImg} alt="banner" />
                <div>
                    <h1>AgendaEventos</h1>
                    <h2>Organize sua agenda</h2>
                </div>
            </Banner>
            <Content>
                <h1>Meus Eventos</h1>
            </Content>
        </Container>
    );
};

export default Home;
