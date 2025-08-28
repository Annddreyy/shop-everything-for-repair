<template>
    <BasePage :links="links" title="О компании"> </BasePage>
</template>

<script setup lang="ts">
import type { Link } from '@/shared/types';
import { BasePage } from '@/widgets';

const links: Link[] = [
    { title: 'Главная', link: '/' },
    { title: 'О компании', link: '/about-company' },
];
</script>
