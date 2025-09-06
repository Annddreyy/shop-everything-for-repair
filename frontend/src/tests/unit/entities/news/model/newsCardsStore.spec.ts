import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import type { AxiosResponse, AxiosResponseHeaders } from 'axios';
import { createPinia, setActivePinia } from 'pinia';
import {
    instance,
    ResponseStatuses,
    type AxiosBaseResponse,
} from '@/shared/api/api';
import { useNewsCardsStore } from '@/entities/news/model';
import type { NewsCard } from '@/entities/news/types';

vi.mock('@/shared/api/api', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@/shared/api/api')>();
    return {
        ...actual,
        instance: {
            get: vi.fn(),
        },
    };
});

const mockResponse: AxiosResponse<
    AxiosBaseResponse<{ newsCards: NewsCard[]; pagesCount: number }>
> = {
    data: {
        data: {
            newsCards: [
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

describe('News Cards Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Успешное получение списка новостей', async () => {
        (instance.get as Mock).mockResolvedValueOnce(mockResponse);

        const store = useNewsCardsStore();

        await store.setNews();

        expect(store.newsCards.length).toBe(3);
        expect(store.newsCards).toStrictEqual(mockResponse.data.data.newsCards);
        expect(store.pagesCount).toBe(mockResponse.data.data.pagesCount);
    });

    it('Номер текущей страницы новостей успешно устанавливается', () => {
        const store = useNewsCardsStore();
        store.setCurrentPage(10);

        expect(store.currentPage).toBe(10);
    });

    it('Размер страницы для запроса получения списка новостей успешно устанавливается', () => {
        const store = useNewsCardsStore();
        store.setPageSize(5);

        expect(store.pageSize).toBe(5);
    });
});
