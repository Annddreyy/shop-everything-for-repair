import { app } from './app';
import { runMongoDb } from '@/internal/infrastructure/db';
import { logger } from '@/internal/pkg/logger';

const port = 8080;

app.listen(port, async () => {
    logger.info('Ожидание подключения к БД....');
    await runMongoDb();
    logger.info(`Сервер запущен на порту: ${port}`);
});
