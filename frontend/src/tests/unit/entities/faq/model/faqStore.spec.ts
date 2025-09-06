import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import type { AxiosResponse, AxiosResponseHeaders } from 'axios';
import { createPinia, setActivePinia } from 'pinia';
import {
    instance,
    ResponseStatuses,
    type AxiosBaseResponse,
} from '@/shared/api/api';
import { useFAQStore } from '@/entities/faq/model';
import type { FAQ } from '@/entities/faq/types';

vi.mock('@/shared/api/api', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@/shared/api/api')>();
    return {
        ...actual,
        instance: {
            get: vi.fn(),
        },
    };
});

const mockResponse: AxiosResponse<AxiosBaseResponse<FAQ[]>> = {
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
});
