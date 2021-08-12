import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import './database';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Server started on port 3333');
});
