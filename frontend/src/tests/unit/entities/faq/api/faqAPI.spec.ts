import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { faqAPI } from '@/entities/faq/api';
import { instance } from '@/shared/api/api';

vi.mock('@/shared/api/api', () => {
    return {
        instance: {
            get: vi.fn(),
        },
    };
});

describe('FAQ API', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('Возвращается success при корректном ответе', async () => {
        const mockData = {
            data: {
                data: [{ id: 1, title: 'test' }],
                pagesCount: 5,
            },
        };
        (instance.get as Mock).mockResolvedValue(mockData);

        const result = await faqAPI.getFAQ();
        expect(result.status).toBe('success');
        if (result.status === 'success') {
            expect(result.faq).toHaveLength(1);
        }

        expect(instance.get).toHaveBeenCalledWith('/faq');
    });

    it('Возвращает error при ошибке класс Error', async () => {
        (instance.get as Mock).mockRejectedValue(new Error('Network error'));

        const result = await faqAPI.getFAQ();
        expect(result.status).toBe('error');
        if (result.status === 'error') {
            expect(result.error).toBe('Network error');
        }

        expect(instance.get).toHaveBeenCalledWith('/faq');
    });

    it('Возвращает error при ошибке типа object', async () => {
        (instance.get as Mock).mockRejectedValue(
            String({ error: 'Network error' }),
        );

        const result = await faqAPI.getFAQ();
        expect(result.status).toBe('error');
        if (result.status === 'error') {
            expect(result.error).toBe('[object Object]');
        }

        expect(instance.get).toHaveBeenCalledWith('/faq');
    });
});
