import { Router } from 'express';
import CreateEventService from '../services/CreateEventService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { getRepository } from 'typeorm';
import Event from '../models/Event';
import { parseISO } from 'date-fns';

const eventsRouter = Router();

eventsRouter.use(ensureAuthenticated);

eventsRouter.get('/', async (request, response) => {

    const user_id = request.user.id;

    const eventsRepository = getRepository(Event);

    const events = await eventsRepository.find({ user_id });

    return response.status(200).json(events);

});

eventsRouter.post('/', async (request, response) => {

    try {

        const user_id = request.user.id;

        const { description, start_date, end_date } = request.body;

        const createEventService = new CreateEventService();

        const event = await createEventService.execute({
            user_id,
            description,
            start_date,
            end_date,
        });

        return response.status(200).json(event);

    } catch (err) {

        return response.status(400).json({ error: err.message });
    }

});

eventsRouter.put('/:id', async (request, response) => {

    try {

        const { id } = request.params;

        const { description, start_date, end_date } = request.body;

        const eventsRepository = getRepository(Event);

        const event = await eventsRepository.findOne({ id });

        if (!event) {
            throw new Error('Event not found.');
        }

        if (description) {
            event.description = description;
        }

        if (start_date) {
            event.start_date = parseISO(start_date);
        }

        if (end_date) {
            event.end_date = parseISO(end_date);
        }

        await eventsRepository.save(event);

        return response.status(200).json(event);

    } catch (err) {

        return response.status(400).json({ error: err.message });
    }
});

eventsRouter.delete('/:id', async (request, response) => {

    try {

        const { id } = request.params;

        const eventsRepository = getRepository(Event);

        const event = await eventsRepository.findOne({ id });

        if (!event) {
            throw new Error('Event not found.');
        }

        await eventsRepository.delete({ id });

        return response.status(200).json({ message: 'Event deleted succesfully.' });

    } catch (err) {

        return response.status(400).json({ error: err.message });
    }
});

export default eventsRouter;
