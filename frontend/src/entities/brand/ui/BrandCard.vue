<template>
    <article class="brand">
        <img class="brand__img" :src="img" :alt="title" />
    </article>
</template>

<script setup lang="ts">
import type { Brand } from '../model/brands';

defineProps<Brand>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.brand {
    @extend .row-a-c;
    @extend .row-j-c;

    width: 214px;
    height: 80px;

    padding: 10px;

    background-color: #f2f4f5;

    &__img {
        height: 32px;
    }
}
</style>
