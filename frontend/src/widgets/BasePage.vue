<template>
    <div class="page-top">
        <HeaderComponent />
        <BreadCrumbs v-if="breadcrumbs" :breadcrumbs="breadcrumbs" />
        <PageTitle v-if="title" :title="title" />
    </div>
    <main>
        <slot />
    </main>
    <FooterComponent />
</template>

<script setup lang="ts">
import { BreadCrumbs, PageTitle } from '@/shared/ui';
import { HeaderComponent, FooterComponent } from '.';

type Props = {
    breadcrumbs?: Link[];
    title?: string;
};

defineProps<Props>();
</script>

<style lang="scss" scoped>
main {
    flex: 1;
}
</style>
