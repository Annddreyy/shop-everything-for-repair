import cors from 'cors';
import express from 'express';
import { setupSwagger } from '../swagger';
import { newsRouter } from './routes/news';
import { productsRouter } from './routes/products';
import { promotionsRouter } from './routes/promotions';

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use(
    cors({
        origin: 'http://localhost:5173',
        // credentials: true,
    }),
);

app.use('/products', productsRouter);
app.use('/news', newsRouter);
app.use('/promotions', promotionsRouter);

setupSwagger(app);
