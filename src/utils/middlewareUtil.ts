import cors from 'cors';
import express, {Express} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

export const initMiddleware = (app: Express) => {
    app.use(express.json({limit: '50mb'}));
    app.use(morgan('common'));
    app.use(cors());
    app.use(helmet());
}
