import { emailAdapter } from '../../../../app/adapters';
import { describe, it, expect } from 'vitest';
import { config } from 'dotenv';

describe('Отправка писем', () => {
    beforeAll(() => {
        config();
    });
    it('Отправка письма произвольного содержания', async () => {
        const result = await emailAdapter.sendEmail({
            to: process.env.EMAIL_SENDER_EMAIL!,
            subject: 'Это тестовое сообщение',
            html: `
                <h1>Тестовое сообщение</h1>
                <p>Тестовый текст</p>
            `,
        });
        expect(result.accepted[0]).toBe('andreymail22112006@gmail.com');
    }, 30_000);
});
