
<template>
    <HeaderComponent />
    <BreadCrumbs :links="breadCrumbsLinks" />
    <FAQCard />
    <FooterComponent />
</template>

<script setup lang="ts">
import BreadCrumbs from '@/shared/ui/BreadCrumbs/BreadCrumbs.vue';
import FooterComponent from '@/widgets/Footer/FooterComponent.vue';
import HeaderComponent from '@/widgets/Header/HeaderComponent.vue';
import FAQCard from './entities/faq/ui/FAQCard.vue';
import type { Link } from '@/shared/types/link';

const breadCrumbsLinks: Link[] = [
    { title: 'Главная', link: '/' },
    { title: 'Вопрос-ответ', link: '/faq' },
];
</script>
