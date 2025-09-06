<template>
    <BasePage :breadcrumbs="breadcrumbs" title="Страница не найдена">
        <Block404Component />
    </BasePage>
</template>

<script setup lang="ts">
import { BasePage } from '@/widgets';
import { Block404Component } from './ui';

const breadcrumbs: Link[] = [
    { link: '/', title: 'Стройоптторг' },
    { link: '/404', title: 'Страница не найдена' },
];
</script>
