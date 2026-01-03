<template>
    <section class="brands">
        <div class="container">
            <h2 class="brands__title">Популярные бренды</h2>
        </div>
        <div class="container brands__list">
            <BrandCard v-for="brand in brands" :key="brand.id" v-bind="brand" />
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Brand } from '../model/brands';
import BrandCard from './BrandCard.vue';

defineProps<{
    brands: Brand[];
}>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.brands {
    @extend .column;
    gap: 40px;

    background-color: #f9fafb;
    padding: 50px 0;

    &__title {
        @extend .row;

        width: 100%;

        text-align: start;
        align-self: flex-start;
        justify-self: self-start;

        font-size: var(--fz-xxl);
    }

    &__list {
        @extend .row-a-c;
        gap: 20px;
    }
}
</style>
