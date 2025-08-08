<template>
    <HeaderComponent />
    <BreadCrumbs :links="links" />
    <PageTitle title="Страница не найдена" />
    <Block404Component />
    <FooterComponent />
</template>

<script setup lang="ts">
import { BreadCrumbs, PageTitle } from '@/shared/ui';
import { FooterComponent, HeaderComponent } from '@/widgets';
import { Block404Component } from './ui';
import type { Link } from '@/shared/types/link.types';

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
