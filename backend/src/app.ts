import cors from 'cors';
import express from 'express';
import { setupSwagger } from '../swagger';
import {
    productCardsRouter,
    newsCardsRouter,
    promotionCardsRouter,
    emailRouter,
} from './routes';

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use(
    cors({
        origin: 'http://localhost:5173',
        // credentials: true,
    }),
);

app.use('/product_cards', productCardsRouter);
app.use('/news_cards', newsCardsRouter);
app.use('/promotion_cards', promotionCardsRouter);
app.use('/send', emailRouter);

setupSwagger(app);
