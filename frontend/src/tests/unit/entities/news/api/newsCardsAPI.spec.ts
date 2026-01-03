import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import type { AxiosResponseHeaders } from 'axios';
import { instance } from '@/shared/api';
import { newsAPI } from '@/entities/news';
import type { News } from '@/entities/news';

vi.mock('@/shared/api/api', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@/shared/api')>();
    return {
        ...actual,
        instance: {
            get: vi.fn(),
        },
    };
});

const mockResponse: MockResponse<{
    news: News[];
    pagesCount: number;
}> = {
    data: {
        data: {
            news: [
                {
                    id: '1',
                    img: 'test1.img',
                    title: 'test1',
                    description: 'description1',
                    date: new Date(2025, 12, 12),
                },

                {
                    id: '2',
                    img: 'test2.img',
                    title: 'test2',
                    description: 'description2',
                    date: new Date(2025, 12, 12),
                },
                {
                    id: '3',
                    img: 'test3.img',
                    title: 'test3',
                    description: 'description3',
                    date: new Date(2025, 12, 12),
                },
            ],
            pagesCount: 10,
        },
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

describe('News cards API', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('Возвращается success при корректном ответе', async () => {
        (instance.get as Mock).mockResolvedValue(mockResponse);

        const result = await newsAPI.getNews();
        expect(result.status).toBe('success');
        if (result.status === 'success') {
            expect(result.data.news).toHaveLength(3);
        }

        expect(instance.get).toHaveBeenCalledWith('/news?page=1&size=10');
    });

    it('Возвращает error при ошибке класс Error', async () => {
        (instance.get as Mock).mockRejectedValue(new Error('Network error'));

        const result = await newsAPI.getNews();
        expect(result.status).toBe('error');
        if (result.status === 'error') {
            expect(result.error).toBe('Network error');
        }

        expect(instance.get).toHaveBeenCalledWith('/news?page=1&size=10');
    });

    it('Возвращает error при ошибке типа object', async () => {
        (instance.get as Mock).mockRejectedValue(
            String({ error: 'Network error' }),
        );

        const result = await newsAPI.getNews();
        expect(result.status).toBe('error');
        if (result.status === 'error') {
            expect(result.error).toBe('[object Object]');
        }

        expect(instance.get).toHaveBeenCalledWith('/news?page=1&size=10');
    });
});
