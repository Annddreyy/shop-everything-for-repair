import type { AxiosResponseHeaders } from 'axios';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import { usePromotionsStore } from '@/entities/promotion';
import { useReviewsStore } from '@/entities/review';
import type { Review } from '@/entities/review';
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

const mockResponse: MockResponse<{ reviews: Review[]; pagesCount: number }> = {
    data: {
        data: {
            reviews: [
                {
                    id: '1',
                    text: 'test1',
                    images: [],
                    author: 'author1',
                    date: new Date(2025, 10, 5),
                },
                {
                    id: '2',
                    text: 'test2',
                    images: ['img2.png'],
                    author: 'author2',
                    date: new Date(2025, 10, 11),
                },
                {
                    id: '3',
                    text: 'test3',
                    images: ['img1.png', 'img2.png'],
                    author: 'author3',
                    date: new Date(2025, 10, 16),
                },
            ],
            pagesCount: 3,
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

describe('Promotion  Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Успешное получение списка отзывов', async () => {
        (instance.get as Mock).mockResolvedValueOnce(mockResponse);

        const store = useReviewsStore();

        await store.getReviews();

        expect(store.reviews.length).toBe(3);
        expect(store.reviews).toStrictEqual(mockResponse.data.data.reviews);
        expect(store.pagesCount).toBe(mockResponse.data.data.pagesCount);
    });

    it('Номер текущей страницы списка отзывов успешно устанавливается', () => {
        const store = usePromotionsStore();
        store.currentPage = 10;
        expect(store.currentPage).toBe(10);
    });

    it('Размер страницы для запроса получения списка отзывов успешно устанавливается', () => {
        const store = usePromotionsStore();
        store.pageSize = 5;
        expect(store.pageSize).toBe(5);
    });
});
