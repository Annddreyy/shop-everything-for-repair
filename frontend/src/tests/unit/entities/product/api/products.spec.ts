import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { instance } from '@/shared/api';
import type { AxiosResponseHeaders } from 'axios';
import type { Product } from '@/entities/product';
import { productsAPI } from '@/entities/product';

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

describe('News cards API', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('Возвращается success при корректном ответе', async () => {
        (instance.get as Mock).mockResolvedValue(mockResponse);

        const result = await productsAPI.getProduct();
        expect(result.status).toBe('success');
        if (result.status === 'success') {
            expect(result.data.product).toHaveLength(3);
        }

        expect(instance.get).toHaveBeenCalledWith('/product?page=1&size=10');
    });

    it('Возвращает error при ошибке класс Error', async () => {
        (instance.get as Mock).mockRejectedValue(new Error('Network error'));

        const result = await productsAPI.getProduct();
        expect(result.status).toBe('error');
        if (result.status === 'error') {
            expect(result.error).toBe('Network error');
        }

        expect(instance.get).toHaveBeenCalledWith('/product?page=1&size=10');
    });

    it('Возвращает error при ошибке типа object', async () => {
        (instance.get as Mock).mockRejectedValue(
            String({ error: 'Network error' }),
        );

        const result = await productsAPI.getProduct();
        expect(result.status).toBe('error');
        if (result.status === 'error') {
            expect(result.error).toBe('[object Object]');
        }

        expect(instance.get).toHaveBeenCalledWith('/product?page=1&size=10');
    });
});
