<template>
    <ProductCard :card="card"/>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import ProductCard from '@/entities/product/ui/ProductCard.vue';
import type { Product } from '@/entities/product/types/product';
import img from './../assets/images/product/product_test.png';

const card: Product = {
    id: 10,
    title: 'Перфоратор универсальный Wander X645-46 GF 1450W',
    price: 12000,
    promotionPercent: 12,
    img: img,
    article: 'XJ390254',
    statuses: ['хит', 'новинка'],
    isFavorite: true,
    isComparable: false,
    isInCart: false,
};

</script>

<style module>

</style>
