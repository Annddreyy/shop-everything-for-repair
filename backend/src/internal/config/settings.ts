import 'dotenv/config';

export const settings = {
    // Данные для подключения к БД
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
    DB_NAME: process.env.DB_NAME,

    // Данные для авторизации
    JWT_SECRET: process.env.JWT_SECRET || '123',

    // Данные для отправки писем
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_SENDER_EMAIL: process.env.EMAIL_SENDER_EMAIL,
    EMAIL_SENDER_PASSWORD: process.env.EMAIL_SENDER_PASSWORD,
    EMAIL_INFO_NAME: process.env.EMAIL_INFO_NAME,
    EMAIL_INFO_EMAIL: process.env.EMAIL_INFO_EMAIL,
};
