<template>
    <HeaderComponent />
    <main>
        <div class="container">
            <BreadCrumbs v-if="breadcrumbs" :breadcrumbs="breadcrumbs" />
        </div>
        <PageTitle v-if="title" :title="title" />
        <slot />
    </main>
    <FooterComponent />
    <OrderCall />
</template>

<script setup lang="ts">
import { BreadCrumbs, PageTitle } from '@/shared/ui';
import { HeaderComponent, FooterComponent, OrderCall } from '@/widgets';

defineProps<{
    breadcrumbs?: Link[];
    title?: string;
}>();
</script>

<style lang="scss" scoped>
main {
    flex: 1;
}
</style>
