import { test, expect } from '@playwright/test';
import fs from 'fs';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import sharp from 'sharp';
import path from 'path';

test('сравнение с конкретным макетом', async ({ page, browserName }) => {
    await page.goto('http://localhost:5173/product/2');

    // скриншот текущей страницы
    const screenshotBuffer = await page.screenshot();

    // путь к конкретному эталонному скриншоту
    const baseDir = path.join('e2e/ui/__screenshots__');
    const expectedPath = path.join(baseDir, 'image.png'); // конкретный макет
    if (!fs.existsSync(expectedPath)) {
        throw new Error(`Эталонное изображение не найдено: ${expectedPath}`);
    }

    // пути для сохранения текущего скрина и diff для этого браузера
    const actualPath = path.join(baseDir, `${browserName}_actual.png`);
    const diffPath = path.join(baseDir, `${browserName}_diff.png`);

    // читаем эталон
    const expectedBuffer = fs.readFileSync(expectedPath);

    // декодируем скриншоты
    const img1 = PNG.sync.read(screenshotBuffer);

    // ресайзим эталон под размер скриншота (чтобы не было ошибки "Image sizes do not match")
    const expectedResizedBuffer = await sharp(expectedBuffer)
        .resize(img1.width, img1.height)
        .png()
        .toBuffer();
    const img2 = PNG.sync.read(expectedResizedBuffer);

    const { width, height } = img1;
    const diff = new PNG({ width, height });

    // сравнение
    const mismatch = pixelmatch(
        img1.data,
        img2.data,
        diff.data,
        width,
        height,
        { threshold: 0.1 },
    );

    // сохраняем артефакты
    fs.writeFileSync(actualPath, screenshotBuffer);
    fs.writeFileSync(diffPath, PNG.sync.write(diff));

    console.log(
        `✅ ${browserName}: несовпадений ${mismatch}, diff: ${diffPath}`,
    );

    // порог несовпадений
    expect(mismatch).toBeLessThan(100);
});
