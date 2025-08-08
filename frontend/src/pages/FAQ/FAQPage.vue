<template>
    <HeaderComponent />
    <BreadCrumbs :links="breadCrumbsLinks" />
    <FAQCard />
    <FooterComponent />
</template>

<script setup lang="ts">
import { BreadCrumbs } from '@/shared/ui';
import { FooterComponent, HeaderComponent } from '@/widgets';
import { FAQCard } from './entities/faq/ui';
import type { Link } from '@/shared/types/link.types';

const breadCrumbsLinks: Link[] = [
    { title: 'Главная', link: '/' },
    { title: 'Вопрос-ответ', link: '/faq' },
];
</script>
