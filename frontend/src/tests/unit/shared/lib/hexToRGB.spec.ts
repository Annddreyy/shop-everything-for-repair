import { describe, it, expect } from 'vitest';
import { hexToRGB } from '@/shared/libs/ui';

describe('Проверка перевода hex формата цвета в RGB', () => {
    it('Проверка перевода формата #xxx в RGB', () => {
        expect(hexToRGB('#ccc')).toBe('rgb(204, 204, 204)');
    });

    it('Проверка перевода формата #xxxxxx в RGB', () => {
        expect(hexToRGB('#f37dec')).toBe('rgb(243, 125, 236)');
    });
});
