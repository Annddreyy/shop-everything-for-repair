import { describe, it, expect } from 'vitest';
import { formatDate } from '@/shared/lib';

describe('format date', () => {
    it('Проверка форматирования даты', () => {
        expect(formatDate(new Date(2025, 3, 12))).toBe('12 апреля 2025 г.');
    });
});
