import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import User from './User';

@Entity('events')
class Event {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Event;
