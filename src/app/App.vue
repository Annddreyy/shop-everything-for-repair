<template>
    <div v-for="product in products" :key="product.id">
        <ProductCard :card="product" />
    </div>
    <RouterView />
</template>

<script setup lang="ts">
import { useProductStore } from '@/entities/product/model/productStore';
import ProductCard from '@/entities/product/ui/ProductCard.vue';
import { computed, onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';

const productsStore = useProductStore();
const products = computed(() => productsStore.products);

onBeforeMount(async () => {
    if (products.value.length === 0) {
        await productsStore.setProducts();
    }
});
</script>

<style module></style>
