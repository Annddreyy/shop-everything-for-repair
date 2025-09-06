<template>
    <RouterLink :to="link" class="product-category-card">
        <img :src="img" :alt="title" class="product-category-card__img" />
        <h3 class="product-category-card__title">{{ title }}</h3>
    </RouterLink>
</template>

<script setup lang="ts">
import type { ProductCategory } from '../types';

defineProps<ProductCategory>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

.product-category-card {
    @extend .column-c;
    gap: 10px;

    width: 185px;
    height: 200px;

    background-color: #f3f4f5;
    border-radius: 15px;
    padding: 12px 16px;

    &__img {
        max-width: 138px;
        max-height: 123px;
    }

    &__title {
        font-size: 15px;
        list-style: 19px;
        font-weight: 400;
        text-align: center;
    }
}
</style>
