import { faqAPI } from '@/entities/faq';
import type { FAQ } from '@/entities/faq';
import { instance } from '@/shared/api';
import type { AxiosResponseHeaders } from 'axios';
import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';

vi.mock('@/shared/api/api', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@/shared/api')>();
    return {
        ...actual,
        instance: {
            get: vi.fn(),
        },
    };
});

const mockResponse: MockResponse<FAQ[]> = {
    data: {
        data: [
            { id: '1', answer: 'answer1', question: 'question1' },
            { id: '2', answer: 'answer2', question: 'question2' },
            { id: '3', answer: 'answer3', question: 'question3' },
        ],
        status: ResponseStatuses.OK,
        messages: [],
    },
    status: 200,
    headers: {},
    statusText: 'OK',
    config: {
        headers: {} as AxiosResponseHeaders,
    },
};

describe('FAQ API', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('Возвращается success при корректном ответе', async () => {
        (instance.get as Mock).mockResolvedValue(mockResponse);

        const result = await faqAPI.getFAQ();
        expect(result.status).toBe('success');
        if (result.status === 'success') {
            expect(result.data).toHaveLength(3);
        }

        expect(instance.get).toHaveBeenCalledWith('/faq');
    });

    it('Возвращает error при ошибке класс Error', async () => {
        (instance.get as Mock).mockRejectedValue(new Error('Network error'));

        const result = await faqAPI.getFAQ();
        expect(result.status).toBe('error');
        if (result.status === 'error') {
            expect(result.error).toBe('Network error');
        }

        expect(instance.get).toHaveBeenCalledWith('/faq');
    });

    it('Возвращает error при ошибке типа object', async () => {
        (instance.get as Mock).mockRejectedValue(
            String({ error: 'Network error' }),
        );

        const result = await faqAPI.getFAQ();
        expect(result.status).toBe('error');
        if (result.status === 'error') {
            expect(result.error).toBe('[object Object]');
        }

        expect(instance.get).toHaveBeenCalledWith('/faq');
    });
});
