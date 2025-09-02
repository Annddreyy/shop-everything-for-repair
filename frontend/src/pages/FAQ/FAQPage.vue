<template>
    <BasePage :breadcrumbs="breadcrumbs" title="Вопрос-ответ">
        <FAQCard />
    </BasePage>
</template>

<script setup lang="ts">
import { BasePage } from '@/widgets';
import { FAQCard } from '@/entities/faq/ui';

const breadcrumbs: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'Вопрос-ответ', link: '/faq' },
];
</script>
