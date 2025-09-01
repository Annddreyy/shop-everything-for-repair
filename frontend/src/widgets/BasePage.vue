<template>
    <div class="page-top">
        <HeaderComponent />
        <BreadCrumbs v-if="links" :links="links" />
        <PageTitle v-if="title" :title="title" />
    </div>
    <main>
        <slot />
    </main>
    <FooterComponent />
</template>

<script setup lang="ts">
import type { Link } from '@/types';
import { BreadCrumbs, PageTitle } from '@/shared/ui';
import { HeaderComponent, FooterComponent } from '.';

defineProps<{
    links?: Link[];
    title?: string;
}>();
</script>

<style lang="scss" scoped>
main {
    flex: 1;
}
</style>
