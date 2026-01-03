import type { AxiosResponseHeaders } from 'axios';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import { useProductsStore } from '@/entities/product';
import type { Product } from '@/entities/product';
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
    product: Product[];
    pagesCount: number;
}> = {
    data: {
        data: {
            product: [
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

describe('Product  Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Успешное получение списка карточек товаров', async () => {
        (instance.get as Mock).mockResolvedValueOnce(mockResponse);

        const store = useProductsStore();

        await store.getProducts();

        expect(store.products.length).toBe(3);
        expect(store.products).toStrictEqual(mockResponse.data.data.product);
        expect(store.pagesCount).toBe(mockResponse.data.data.pagesCount);
    });

    it('Номер текущей страницы списка товаров успешно устанавливается', () => {
        const store = useProductsStore();
        store.currentPage = 10;
        expect(store.currentPage).toBe(10);
    });

    it('Размер страницы для запроса получения списка товаров успешно устанавливается', () => {
        const store = useProductsStore();
        store.pageSize = 5;
        expect(store.pageSize).toBe(5);
    });
});
