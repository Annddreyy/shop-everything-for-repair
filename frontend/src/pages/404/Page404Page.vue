<template>
    <HeaderComponent />
    <BreadCrumbs :links="links" />
    <PageTitle title="Страница не найдена" />
    <Block404 />
    <FooterComponent />
</template>

<script setup lang="ts">
import type { Link } from '@/shared/types/link';
import PageTitle from '@/shared/ui/PageTitle/PageTitle.vue';
import FooterComponent from '@/widgets/Footer/FooterComponent.vue';
import HeaderComponent from '@/widgets/Header/HeaderComponent.vue';
import Block404 from './ui/Block404Component.vue';
import BreadCrumbs from '@/shared/ui/BreadCrumbs/BreadCrumbs.vue';

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
