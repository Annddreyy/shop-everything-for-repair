import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import type { AxiosResponse, AxiosResponseHeaders } from 'axios';
import { createPinia, setActivePinia } from 'pinia';
import {
    instance,
    ResponseStatuses,
    type AxiosBaseResponse,
} from '@/shared/api/api';
import { useProductCardsStore } from '@/entities/product/model';
import type { ProductCard } from '@/entities/product/types';

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
    AxiosBaseResponse<{ productCards: ProductCard[]; pagesCount: number }>
> = {
    data: {
        data: {
            productCards: [
                {
                    id: '1',
                    img: 'test1.img',
                    title: 'test1',
                    price: 1200,
                    promotionPercent: 10,
                    article: '2JD2',
                    statuses: ['новинка', 'распродажа'],
                },
                {
                    id: '2',
                    img: 'test2.img',
                    title: 'test2',
                    price: 1500,
                    article: '2JE3',
                    statuses: ['новинка'],
                },
                {
                    id: '3',
                    img: 'test3.img',
                    title: 'test3',
                    price: 1700,
                    article: '2JE3',
                    statuses: ['новинка'],
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

describe('Product Cards Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Успешное получение списка карточек товаров', async () => {
        (instance.get as Mock).mockResolvedValueOnce(mockResponse);

        const store = useProductCardsStore();

        await store.setProducts();

        expect(store.products.length).toBe(3);
        expect(store.products).toStrictEqual(
            mockResponse.data.data.productCards,
        );
        expect(store.pagesCount).toBe(mockResponse.data.data.pagesCount);
    });

    it('Номер текущей страницы списка товаров успешно устанавливается', () => {
        const store = useProductCardsStore();
        store.setCurrentPage(10);

        expect(store.currentPage).toBe(10);
    });

    it('Размер страницы для запроса получения списка товаров успешно устанавливается', () => {
        const store = useProductCardsStore();
        store.setPageSize(5);

        expect(store.pageSize).toBe(5);
    });
});
