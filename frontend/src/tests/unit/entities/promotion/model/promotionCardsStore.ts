import { usePromotionsStore } from '@/entities/promotion';
import type { Promotion } from '@/entities/promotion';
import { instance } from '@/shared/api';
import type { AxiosResponseHeaders } from 'axios';
import { createPinia, setActivePinia } from 'pinia';
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

const mockResponse: MockResponse<{
    promotion: Promotion[];
    pagesCount: number;
}> = {
    data: {
        data: {
            promotion: [
                {
                    id: '1',
                    backgroundImg: 'test1.img',
                    title: 'test1',
                    promotionPercent: 10,
                },
                {
                    id: '2',
                    backgroundImg: 'test2.img',
                    title: 'test2',
                    promotionPercent: 15,
                },
                {
                    id: '3',
                    backgroundImg: 'test3.img',
                    title: 'test3',
                    promotionPercent: 20,
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

    it('Успешное получение списка карточек акций', async () => {
        (instance.get as Mock).mockResolvedValueOnce(mockResponse);

        const store = usePromotionsStore();

        await store.getPromotions();

        expect(store.promotions.length).toBe(3);
        expect(store.promotions).toStrictEqual(
            mockResponse.data.data.promotion,
        );
        expect(store.pagesCount).toBe(mockResponse.data.data.pagesCount);
    });

    it('Номер текущей страницы списка карточек акций успешно устанавливается', () => {
        const store = usePromotionsStore();
        store.currentPage = 10;
        expect(store.currentPage).toBe(10);
    });

    it('Размер страницы для запроса получения карточек акций успешно устанавливается', () => {
        const store = usePromotionsStore();
        store.pageSize = 5;
        expect(store.pageSize).toBe(5);
    });
});
