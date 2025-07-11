import { describe, it, expect } from 'vitest';
import { hexToRgb } from './../../../../src/shared/lib/workingWithColors/hexToRGB.lib';

describe('Проверка перевода hex формата цвета в RGB', () => {
    it('Проверка перевода формата #xxx в RGB', () => {
        expect(hexToRgb('#ccc')).toBe('rgb(204, 204, 204)');
    });

    it('Проверка перевода формата #xxxxxx в RGB', () => {
        expect(hexToRgb('#f37dec')).toBe('rgb(243, 125, 236)');
    });
});
