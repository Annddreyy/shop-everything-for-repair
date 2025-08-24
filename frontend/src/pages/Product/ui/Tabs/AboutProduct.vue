<template>
    <div class="about-product-tab">
        <h2 class="title">О товаре "{{ productStore.title }}"</h2>
        <div v-html="html" class="text"></div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/entities/product/model/productStore';
import { parse } from 'marked';

const productStore = useProductStore();

const html = parse(productStore.about);
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
