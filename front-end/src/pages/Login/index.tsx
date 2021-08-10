import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(): Promise<void> {
        await api
            .post('/sessions', { email, password })
            .then((response) => {
                const { token, user } = response.data;
                localStorage.setItem('JWT', token);
                localStorage.setItem('user', JSON.stringify(user));
            })
            .catch(() => {
                alert('Não foi possível fazer login');
            });
    }

    return (
        <Container>
            <Content>
                <form onSubmit={handleSubmit}>
                    <h1>Fazer login</h1>

                    <Input
                        name="email"
                        icon={FiMail}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />

                    <Button type="submit">ENTRAR</Button>

                    <h2>Não possui cadastro?</h2>

                    <Link to="/register">
                        <FiLogIn />
                        Criar conta
                    </Link>
                </form>
            </Content>
        </Container>
    );
};

export default Login;
