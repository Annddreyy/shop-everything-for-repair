import { describe, it, expect } from 'vitest';
import { onLoadError } from '@/shared/libs/ui/onLoadError';
import { imgNotFoundImg } from '@/shared/ui/assets';

describe('onLoadError', () => {
    it('меняет src изображения на imgNotFoundImg при ошибке загрузки', () => {
        const img = document.createElement('img');
        img.src = 'broken.png';

        const event = { target: img } as unknown as Event;
        onLoadError(event);

        expect(new URL(img.src).pathname).toBe(imgNotFoundImg);
    });
});
