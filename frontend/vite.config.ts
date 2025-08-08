import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
    plugins: [vue(), vueJsx(), vueDevTools()],
    server: {
        host: '0.0.0.0',
        port: 5173,
        watch: {
            usePolling: true,
        },
        allowedHosts: ['repair.localhost.com'],
    },
    test: {
        coverage: {
            provider: 'v8',
            exclude: [
                'src/app/**',
                'src/**/*.types.ts',
                'src/pages/*/*Page.vue',
                'env.d.ts',
                'eslint.config.ts',
                'playwright.config.ts',
                'vite.config.ts',
                'vitest.config.ts',
            ],
            thresholds: {
                statements: 95,
                branches: 95,
                functions: 95,
                lines: 95,
            },
        },
        exclude: [
            'env.d.ts',
            'eslint.config.ts',
            'playwright.config.ts',
            'vite.config.ts',
            'vitest.config.ts',
            'src/app/**',
        ],
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
