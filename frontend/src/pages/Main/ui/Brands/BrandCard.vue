<template>
    <article class="brand">
        <img :src="img" alt="" class="brand__img" />
    </article>
</template>

<script setup lang="ts">
import type { Brand } from '@/pages/Main/config/brands/brands.config';

defineProps<Brand>();
</script>

<style lang="scss" module>
@use './../../../assets/scss/display' as *;

.brand {
    @extend .row-a-c;
    @extend .row-j-c;

    width: 215px;
    height: 80px;
    padding: 10px;
    background-color: #f2f4f5;
}
</style>
