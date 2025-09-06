<template>
    <BasePage :breadcrumbs="breadcrumbs" title="О компании"> </BasePage>
</template>

<script setup lang="ts">
import { BasePage } from '@/widgets';

const breadcrumbs: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'О компании', link: '/about-company' },
];
</script>
