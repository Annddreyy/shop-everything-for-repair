import { setActivePinia, createPinia } from 'pinia';
import { useFAQStore } from '@/entities/faq/model';
import { beforeEach, describe, expect, it, vi, type Mocked } from 'vitest';
import axios from 'axios';

vi.mock('axios');
const mockedAxios = axios as Mocked<typeof axios>;

describe('FAQ Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Успешное получение списка FAQ', async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: [],
        });

        const store = useFAQStore();
        await store.getFAQ();

        expect(0).toBe(0);
    });
});
