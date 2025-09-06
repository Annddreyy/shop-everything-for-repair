import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import type { AxiosResponse, AxiosResponseHeaders } from 'axios';
import { createPinia, setActivePinia } from 'pinia';
import {
    instance,
    ResponseStatuses,
    type AxiosBaseResponse,
} from '@/shared/api/api';
import { usePromotionCardsStore } from '@/entities/promotion/model';
import type { PromotionCard } from '@/entities/promotion/types';

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
    AxiosBaseResponse<{ promotionCards: PromotionCard[]; pagesCount: number }>
> = {
    data: {
        data: {
            promotionCards: [
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

describe('Promotion Cards Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Успешное получение списка карточек акций', async () => {
        (instance.get as Mock).mockResolvedValueOnce(mockResponse);

        const store = usePromotionCardsStore();

        await store.setPromotions();

        expect(store.promotionCards.length).toBe(3);
        expect(store.promotionCards).toStrictEqual(
            mockResponse.data.data.promotionCards,
        );
        expect(store.pagesCount).toBe(mockResponse.data.data.pagesCount);
    });

    it('Номер текущей страницы списка карточек акций успешно устанавливается', () => {
        const store = usePromotionCardsStore();
        store.setCurrentPage(10);

        expect(store.currentPage).toBe(10);
    });

    it('Размер страницы для запроса получения карточек акций успешно устанавливается', () => {
        const store = usePromotionCardsStore();
        store.setPageSize(5);

        expect(store.pageSize).toBe(5);
    });
});
