import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>,
    ): Promise<void> {
        e.preventDefault();
        await api
            .post('/users', { name, email, password })
            .then((response) => {
                history.push('/');
            })
            .catch((error) => {
                alert('Falha em cadastrar o usuário');
                console.log(error);
            });
    }

    return (
        <Container>
            <Content>
                <form onSubmit={handleSubmit}>
                    <h1>Registre-se agora</h1>

                    <Input
                        name="name"
                        icon={FiUser}
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />

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

                    <Button type="submit">REGISTRAR</Button>

                    <h2>Já possui cadastro?</h2>

                    <Link to="/">
                        <FiLogIn />
                        Fazer login
                    </Link>
                </form>
            </Content>
        </Container>
    );
};

export default Register;
