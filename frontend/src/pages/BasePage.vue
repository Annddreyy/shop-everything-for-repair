<template>
    <HeaderComponent />
    <main>
        <div
            :style="{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
            }"
        >
            <div class="container">
                <BreadCrumbs v-if="breadcrumbs" :breadcrumbs="breadcrumbs" />
                <PageTitle v-if="title" :title="title" />
                <div v-html="html" />
            </div>
        </div>
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
    html?: string;
    backgroundImage?: string;
}>();
</script>

<style lang="scss" scoped>
main {
    flex: 1;
}
</style>
