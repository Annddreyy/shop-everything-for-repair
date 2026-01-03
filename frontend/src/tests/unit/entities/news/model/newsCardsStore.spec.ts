import type { AxiosResponseHeaders } from 'axios';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import { useNewsStore } from '@/entities/news';
import type { News } from '@/entities/news';
import { instance } from '@/shared/api';

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

describe('News  Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Успешное получение списка новостей', async () => {
        (instance.get as Mock).mockResolvedValueOnce(mockResponse);

        const store = useNewsStore();

        await store.getNews();

        expect(store.news.length).toBe(3);
        expect(store.news).toStrictEqual(mockResponse.data.data.news);
        expect(store.pagesCount).toBe(mockResponse.data.data.pagesCount);
    });

    it('Номер текущей страницы новостей успешно устанавливается', () => {
        const store = useNewsStore();
        store.currentPage = 10;
        expect(store.currentPage).toBe(10);
    });

    it('Размер страницы для запроса получения списка новостей успешно устанавливается', () => {
        const store = useNewsStore();
        store.pageSize = 5;
        expect(store.pageSize).toBe(5);
    });
});
