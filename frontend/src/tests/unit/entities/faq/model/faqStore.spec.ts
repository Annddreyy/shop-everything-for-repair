import type { AxiosResponseHeaders } from 'axios';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import { useFAQStore } from '@/entities/faq';
import type { FAQ } from '@/entities/faq';
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

const mockResponse: MockResponse<FAQ[]> = {
    data: {
        data: [
            { id: '1', answer: 'answer1', question: 'question1' },
            { id: '2', answer: 'answer2', question: 'question2' },
            { id: '3', answer: 'answer3', question: 'question3' },
        ],
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

const mockResponseWithError: MockResponse<FAQ[]> = {
    data: {
        data: [],
        status: ResponseStatuses.NOT_FOUND,
        messages: [],
    },
    status: 200,
    headers: {},
    statusText: 'OK',
    config: {
        headers: {} as AxiosResponseHeaders,
    },
};

describe('FAQ Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Успешное получение списка FAQ', async () => {
        (instance.get as Mock).mockResolvedValueOnce(mockResponse);
        const store = useFAQStore();
        await store.getFAQ();

        expect(store.faq.length).toBe(3);
        expect(store.faq).toStrictEqual(mockResponse.data.data);
    });

    it('Ошибка получения списка FAQ', async () => {
        (instance.get as Mock).mockResolvedValueOnce(mockResponseWithError);
        const store = useFAQStore();
        await store.getFAQ();

        expect(store.faq.length).toBe(0);
    });
});
