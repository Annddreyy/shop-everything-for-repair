<template>
    <RouterLink :to="card.link" :class="$style.card">
        <img :src="card.img" :alt="card.title" :class="$style.img" />
        <h3 :class="$style.title">{{ card.title }}</h3>
    </RouterLink>
</template>

<script setup lang="ts">
import type { ProductCategory } from './types';
const { card } = defineProps<{ card: ProductCategory }>();
</script>

<style lang="scss" module>
@use './../../../assets/scss/variables' as *;
@use './../../../assets/scss/display' as *;

.card {
    @extend .column-a-c;
    gap: $base-gap-2;

    width: 185px;
    height: 200px;

    background-color: #f3f4f5;
    border-radius: $base-border-radius-3;

    padding: $base-padding-4;

    margin-bottom: $base-margin-4;

    .img {
        width: 140px;
        height: 120px;
    }

    .title {
        font-size: var(--fz-medium);
        text-align: center;
    }
}
</style>
