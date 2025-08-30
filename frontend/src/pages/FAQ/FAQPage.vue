<template>
    <BasePage :links="links" title="Вопрос-ответ">
        <FAQCard />
    </BasePage>
</template>

<script setup lang="ts">
import type { Link } from '@/shared/types';
import { BasePage } from '@/widgets';
import { FAQCard } from './entities/faq/ui';

const links: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'Вопрос-ответ', link: '/faq' },
];
</script>
