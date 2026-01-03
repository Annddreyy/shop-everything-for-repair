<template>
    <div class="about-product-tab">
        <h2 class="title">О товаре "{{ product.title }}"</h2>
        <div class="text" v-html="html"></div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { parse } from 'marked';

import { useProductStore } from '@/entities/product';

const productStore = useProductStore();
const { product } = storeToRefs(productStore);

const html = parse(product.value?.about || '');
</script>

<style lang="scss" scoped>
.about-product-tab {
    .title {
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;

        margin-top: 30px;
        margin-bottom: 25px;
    }
}
</style>
