import React, { useState, useEffect } from 'react';

import { FiTrash } from 'react-icons/fi';
import { Modal, Container } from './styles';

import api from '../../services/api';

interface Event {
    id: string;
    description: string;
    start_date: Date;
    end_date: Date;
}

type ModalProps = {
    title: string;
    isUpdate: boolean;
    onClose: () => void;
    event?: Event;
};

const EventModal: React.FC<ModalProps> = ({
    title,
    isUpdate,
    onClose,
    event,
}) => {
    const [description, setDescription] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [start_time, setStart_time] = useState('');
    const [end_time, setEnd_time] = useState('');

    useEffect(() => {
        if (isUpdate) {
            if (event) {
                let data = String(
                    new Date(event.start_date).toISOString(),
                ).split('T');
                setStart_date(`${data[0]}`);

                data = String(new Date(event.end_date).toISOString()).split(
                    'T',
                );
                setEnd_date(`${data[0]}`);

                data = String(new Date(event.start_date).toISOString())
                    .split('T')[1]
                    .split(':');

                setStart_time(`${data[0]}:${data[1]}`);

                data = String(new Date(event.end_date).toISOString())
                    .split('T')[1]
                    .split(':');

                setEnd_time(`${data[0]}:${data[1]}`);

                setDescription(event.description);
            }
        }
    }, [isUpdate, event]);

    async function onSubmit(
        e: React.FormEvent<HTMLFormElement>,
    ): Promise<void> {
        if (!isUpdate) {
            const startDate = `${start_date}T${start_time}:00`;

            const endDate = `${end_date}T${end_time}:00`;

            await api
                .post('/events', {
                    description,
                    start_date: startDate,
                    end_date: endDate,
                })
                .then(() => {
                    window.location.reload();
                })
                .catch(() => {
                    alert('Falha ao criar evento.');
                });
        } else {
            const startDate = `${start_date}T${start_time}:00`;

            const endDate = `${end_date}T${end_time}:00`;
            e.preventDefault();

            await api
                .put(`/events/${event?.id}`, {
                    description,
                    start_date: startDate,
                    end_date: endDate,
                })
                .then(() => {
                    window.location.reload();
                })
                .catch(() => {
                    alert('Falha ao editar evento.');
                });
        }
    }

    async function onDelete(e: React.FormEvent): Promise<void> {
        e.preventDefault();
        await api.delete(`/events/${event?.id}`).then(() => {
            window.location.reload();
        });
    }

    return (
        <Modal>
            <Container onSubmit={onSubmit}>
                <h1>{title}</h1>
                <input
                    placeholder="Descrição do evento"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <div className="inputContainer">
                    <h2>Inicio</h2>
                    <h2>Término</h2>
                </div>
                <div className="inputContainer">
                    <input
                        name="start_date"
                        type="date"
                        placeholder="19:00"
                        value={start_date}
                        onChange={(e) => {
                            setStart_date(e.target.value);
                        }}
                    />
                    <input
                        name="end_date"
                        type="date"
                        placeholder="19:00"
                        value={end_date}
                        onChange={(e) => {
                            setEnd_date(e.target.value);
                        }}
                    />
                </div>
                <div className="inputContainer">
                    <input
                        name="start_time"
                        type="time"
                        placeholder="19:00"
                        value={start_time}
                        onChange={(e) => {
                            setStart_time(e.target.value);
                        }}
                    />
                    <input
                        name="end_time"
                        type="time"
                        placeholder="19:00"
                        value={end_time}
                        onChange={(e) => {
                            setEnd_time(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <button
                        className="cancelar"
                        type="button"
                        onClick={() => onClose()}
                    >
                        Cancelar
                    </button>
                    <button className="confirmar" type="submit">
                        Confirmar
                    </button>
                </div>
                <div>
                    {isUpdate && (
                        <div className="actions">
                            <button type="button" onClick={onDelete}>
                                <FiTrash />
                                Deletar Evento
                            </button>
                            {/* <button type="submit">teste</button> */}
                        </div>
                    )}
                </div>
            </Container>
        </Modal>
    );
};

export default EventModal;
