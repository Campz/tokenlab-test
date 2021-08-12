import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiLogOut, FiClock, FiPlus } from 'react-icons/fi';
import { Container, Header, Banner, Content, Events } from './styles';

import Button from '../../components/Button';
import EventModal from '../../components/EventModal';

import logoImg from '../../assets/logo.svg';
// import homeImg from '../../assets/home-image.png';

import api from '../../services/api';

interface Event {
    id: string;
    description: string;
    start_date: Date;
    end_date: Date;
}

const Home: React.FC = () => {
    const history = useHistory();
    const [events, setEvents] = useState<Event[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [isUpdate, setIsUpdate] = useState(false);
    const [onFocusEvent, setOnFocusEvent] = useState<Event>();

    async function loadEvents(): Promise<void> {
        const token = localStorage.getItem('JWT');

        api.defaults.headers.Authorization = `Bearer ${token}`;

        await api
            .get('/events')
            .then((response) => {
                setEvents(response.data);
            })
            .catch(() => {
                alert('Não foi possivel carregar os eventos');
            });
    }

    useEffect(() => {
        loadEvents();
    }, []);

    function handleCreateEvent(): void {
        setModalTitle('Novo Evento');
        setIsUpdate(false);
        setIsModalVisible(true);
    }

    function handleEditEvent(event: Event): void {
        setModalTitle('Editar Evento');
        setIsUpdate(true);
        setIsModalVisible(true);
        setOnFocusEvent(event);
    }

    function onClose(): void {
        setIsModalVisible(!isModalVisible);
    }

    function getDay(date: Date): string {
        const day = String(new Date(date).getDate());
        return day;
    }

    function getMonth(date: Date): string {
        const dateUTC = new Date(date).toUTCString();
        const month = dateUTC.split(' ');
        return month[2];
    }

    function getHours(start_date: Date, end_date: Date): string {
        const startHour = String(new Date(start_date)).split(' ')[4].split(':');

        const endHour = String(new Date(end_date)).split(' ')[4].split(':');

        const hours = `${startHour[0]}:${startHour[1]} - ${endHour[0]}:${endHour[1]}`;

        return hours;
    }

    function handleLogout(): void {
        localStorage.clear();
        history.push('/');
    }

    return (
        <Container>
            {isModalVisible && (
                <EventModal
                    title={modalTitle}
                    isUpdate={isUpdate}
                    onClose={onClose}
                    event={onFocusEvent}
                />
            )}
            <Header>
                <img src={logoImg} alt="logo" />
                <div>
                    <h1>Sair</h1>
                    <FiLogOut onClick={handleLogout} />
                </div>
            </Header>
            {/* <Banner>
                <img src={homeImg} alt="banner" />
                <div>
                    <h1>AgendaEventos</h1>
                    <h2>Organize sua agenda</h2>
                </div>
            </Banner> */}
            <Content>
                <div className="btContainer">
                    <Button onClick={handleCreateEvent}>
                        <FiPlus />
                        Novo Evento
                    </Button>
                </div>
                <h1>Meus Eventos</h1>
                <Events>
                    {events.map((event) => (
                        <div key={event.id}>
                            <div
                                className="eventContainer"
                                onClick={() => handleEditEvent(event)}
                                role="button"
                            >
                                <div className="date">
                                    <h1>{getDay(event.start_date)}</h1>
                                    <h2>{getMonth(event.start_date)}</h2>
                                </div>
                                <div className="details">
                                    <p>{event.description}</p>
                                    <div>
                                        <FiClock />
                                        <p>
                                            {getHours(
                                                event.start_date,
                                                event.end_date,
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Events>
            </Content>
        </Container>
    );
};

export default Home;
