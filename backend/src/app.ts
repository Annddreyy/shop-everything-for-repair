import cors from 'cors';
import express from 'express';
import { setupSwagger } from '../swagger';
import { newsRouter } from './routes/newsCards.routes';
import { productsRouter } from './routes/productCards.routes';
import { promotionsRouter } from './routes/promotionCards.routes';
import { emailRouter } from './routes/email.routes';

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use(
    cors({
        origin: 'http://localhost:5173',
        // credentials: true,
    }),
);

app.use('/product_cards', productsRouter);
app.use('/news_cards', newsRouter);
app.use('/promotion_cards', promotionsRouter);
app.use('/send', emailRouter);

setupSwagger(app);
