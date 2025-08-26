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

<style lang="scss" module>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;

.product-category-card {
    @extend .column-a-c;
    gap: $base-gap-2;

    width: 185px;
    height: 200px;

    background-color: #f3f4f5;
    border-radius: $base-border-radius-3;

    padding: $base-padding-4;

    margin-bottom: $base-margin-4;

    &__img {
        width: 140px;
        height: 120px;
    }

    &__title {
        font-size: var(--fz-medium);
        text-align: center;
    }
}
</style>
