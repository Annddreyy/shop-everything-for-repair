import { describe, it, expect } from 'vitest';
import { formatDate } from '@/shared/libs/date';

describe('format date', () => {
    it('Проверка форматирования даты', () => {
        expect(formatDate(new Date(2025, 3, 12))).toBe('12 апреля 2025 г.');
    });
    it('Проверка форматиррования даты с выбранными параметрами', () => {
        expect(
            formatDate(new Date(2025, 10, 11), {
                month: '2-digit',
                year: '2-digit',
            }),
        ).toBe('11.25');
    });
});
