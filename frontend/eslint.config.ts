import { globalIgnores } from 'eslint/config';
import {
    defineConfigWithVueTs,
    vueTsConfigs,
} from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginVitest from '@vitest/eslint-plugin';
import pluginPlaywright from 'eslint-plugin-playwright';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
// @ts-expect-error TODO: fix this
import pluginBoundaries from 'eslint-plugin-boundaries';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },

    // @ts-expect-error TODO: fix this
    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,

    {
        ...pluginVitest.configs.recommended,
        files: ['src/**/__tests__/*'],
    },

    {
        ...pluginPlaywright.configs['flat/recommended'],
        files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    },
    skipFormatting,

    // 👇 Конфигурация плагина boundaries
    {
        plugins: {
            boundaries: pluginBoundaries,
        },
        rules: {
            'boundaries/element-types': [
                'error',
                {
                    default: 'disallow',
                    rules: [
                        { from: 'shared', allow: ['shared'] },
                        { from: 'entities', allow: ['shared', 'entities'] },
                        {
                            from: 'features',
                            allow: ['shared', 'entities', 'features'],
                        },
                        {
                            from: 'widgets',
                            allow: [
                                'shared',
                                'entities',
                                'features',
                                'widgets',
                            ],
                        },
                        {
                            from: 'pages',
                            allow: [
                                'shared',
                                'entities',
                                'features',
                                'widgets',
                                'pages',
                            ],
                        },
                        { from: 'app', allow: ['*'] },
                    ],
                },
            ],
        },
        settings: {
            'boundaries/elements': [
                { type: 'shared', pattern: 'src/shared/*' },
                { type: 'entities', pattern: 'src/entities/*' },
                { type: 'features', pattern: 'src/features/*' },
                { type: 'widgets', pattern: 'src/widgets/*' },
                { type: 'pages', pattern: 'src/pages/*' },
                { type: 'app', pattern: 'src/app' },
            ],
        },
    },
);
