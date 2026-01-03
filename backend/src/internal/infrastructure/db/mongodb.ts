import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

import { settings } from '@/internal/config';
import { logger } from '@/internal/pkg/logger';

const MONGO_URI = settings.MONGO_URI;
const DB_NAME = settings.DB_NAME;

export const client = new MongoClient(MONGO_URI);
export const db = client.db(DB_NAME);

mongoose.set('debug', true);

export async function runMongoDb() {
    logger.info('Подключение к mongodb...');
    try {
        await mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
        logger.info('Успешное соединение с БД');
    } catch {
        logger.error('Не получилось подключиться к БД');
        await mongoose.disconnect();
        logger.info('Закрытие соединения с БД');
    }
}
