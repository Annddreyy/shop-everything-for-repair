<template>
    <RouterView />
    <div v-for="product in products" :key="product.id">
        <ProductCard :card="product" />
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/entities/product/model/productStore';
import ProductCard from '@/entities/product/ui/ProductCard.vue';
import { computed, onBeforeMount } from 'vue';

const productsStore = useProductStore();
const products = computed(() => productsStore.products);

onBeforeMount(async () => {
    if (products.value.length === 0) {
        await productsStore.setProducts();
    }
});
</script>

<style module></style>
