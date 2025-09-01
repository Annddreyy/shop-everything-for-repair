<template>
    <BasePage :links="links" title="О компании"> </BasePage>
</template>

<script setup lang="ts">
import type { Link } from '@/types';
import { BasePage } from '@/widgets';

const links: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'О компании', link: '/about-company' },
];
</script>
