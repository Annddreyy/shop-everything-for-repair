
<template>
    <HeaderComponent />
    <BreadCrumbs :links="breadCrumbsLinks" />
    <FAQCard />
    <FooterComponent />
</template>

<script setup lang="ts">
import BreadCrumbs, { type Link } from '@/shared/ui/BreadCrumbs/BreadCrumbs.vue';
import FooterComponent from '@/widgets/Footer/FooterComponent.vue';
import HeaderComponent from '@/widgets/Header/HeaderComponent.vue';
import FAQCard from './entities/faq/ui/FAQCard.vue';

const breadCrumbsLinks: Link[] = [
    { title: 'Главная', link: '/' },
    { title: 'Вопрос-ответ', link: '/faq' },
];
</script>
