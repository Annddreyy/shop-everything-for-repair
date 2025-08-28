<template>
    <HeaderComponent />
    <BreadCrumbs :links="links" />
    <PageTitle :title="title" />
    <slot />
    <FooterComponent />
</template>

<script setup lang="ts">
import type { Link } from '@/shared/types';
import { BreadCrumbs, PageTitle } from '@/shared/ui';
import { HeaderComponent, FooterComponent } from '.';

defineProps<{
    links: Link[];
    title: string;
}>();
</script>
