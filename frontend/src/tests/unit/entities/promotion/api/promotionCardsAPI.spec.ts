import { instance } from '@/shared/api';
import type { AxiosResponseHeaders } from 'axios';
import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import { promotionsAPI } from '@/entities/promotion';
import type { Promotion } from '@/entities/promotion';

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
    promotions: Promotion[];
    pagesCount: number;
}> = {
    data: {
        data: {
            promotions: [
                {
                    id: '1',
                    backgroundImg: 'img1',
                    title: 'test1',
                    promotionPercent: 10,
                },
                {
                    id: '2',
                    backgroundImg: 'img2',
                    title: 'test2',
                    promotionPercent: 15,
                },
                {
                    id: '3',
                    backgroundImg: 'img3',
                    title: 'test3',
                    promotionPercent: 20,
                },
            ],
            pagesCount: 1,
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

describe('FAQ API', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('Возвращается success при корректном ответе', async () => {
        (instance.get as Mock).mockResolvedValue(mockResponse);

        const result = await promotionsAPI.getPromotions();
        expect(result.status).toBe('success');
        if (result.status === 'success') {
            expect(result.data.promotions).toHaveLength(3);
        }

        expect(instance.get).toHaveBeenCalledWith('/promotion?page=1&size=10');
    });

    it('Возвращает error при ошибке класс Error', async () => {
        (instance.get as Mock).mockRejectedValue(new Error('Network error'));

        const result = await promotionsAPI.getPromotions();
        expect(result.status).toBe('error');
        if (result.status === 'error') {
            expect(result.error).toBe('Network error');
        }

        expect(instance.get).toHaveBeenCalledWith('/promotion?page=1&size=10');
    });

    it('Возвращает error при ошибке типа object', async () => {
        (instance.get as Mock).mockRejectedValue(
            String({ error: 'Network error' }),
        );

        const result = await promotionsAPI.getPromotions();
        expect(result.status).toBe('error');
        if (result.status === 'error') {
            expect(result.error).toBe('[object Object]');
        }

        expect(instance.get).toHaveBeenCalledWith('/promotion?page=1&size=10');
    });
});
