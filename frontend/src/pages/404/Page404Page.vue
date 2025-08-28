<template>
    <BasePage :links="links" title="Страница не найдена">
        <Block404Component />
    </BasePage>
</template>

<script setup lang="ts">
import type { Link } from '@/shared/types';
import { BasePage } from '@/widgets';
import { Block404Component } from './ui';

const links: Link[] = [
    {
        link: '/',
        title: 'Главная',
    },
    {
        link: '/404',
        title: 'Страница не найдена',
    },
];
</script>
