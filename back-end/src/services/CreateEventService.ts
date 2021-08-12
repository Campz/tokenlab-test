import { getRepository, Repository } from 'typeorm';
import Event from '../models/Event';
import User from '../models/User';
import { startOfHour, parseISO, isBefore, endOfHour } from 'date-fns';

interface Request {
    user_id: string,
    description: string,
    start_date: string,
    end_date: string,
}

class CreateEventService {
    public async execute({ user_id, description, start_date, end_date }: Request): Promise<Event> {
        const eventsRepository = getRepository(Event);
        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({
            where: { id: user_id }
        });

        if (!checkUserExists) {
            throw new Error('User not found.');
        }
        const hourStart = startOfHour(parseISO(start_date));
        const hourEnd = endOfHour(parseISO(end_date));

        if (isBefore(hourStart, new Date()) || isBefore(hourEnd, new Date()) || isBefore(new Date(end_date), new Date(start_date))) {
            throw new Error('Date not avaliable.');
        }

        const checkEventAtSameTime = await eventsRepository.findOne({
            where: {
                user_id,
                start_date
            }
        });

        if (checkEventAtSameTime) {
            throw new Error('User already have an event at this time');
        }

        const event = eventsRepository.create({
            user_id,
            description,
            start_date,
            end_date
        });

        await eventsRepository.save(event);

        return event;
    }
}

export default CreateEventService;

