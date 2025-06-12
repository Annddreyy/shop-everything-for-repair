<template>
    <RouterView />
    <div v-for="product in products" :key="product.id">
        <ProductCard :card="product" />
    </div>
    <NewsCardComponent :card="card" :format-date="formatDate" />
</template>

<script setup lang="ts">;
import type { NewsCard } from '@/entities/news/types/news';
import NewsCardComponent from '@/entities/news/ui/NewsCardComponent.vue';
import { useProductStore } from '@/entities/product/model/productStore';
import ProductCard from '@/entities/product/ui/ProductCard.vue';
import { formatDate } from '@/shared/lib/formatDate';
import { computed, onBeforeMount } from 'vue';

const productsStore = useProductStore();
const products = computed(() => productsStore.products);

const card: NewsCard = {
    id: 1,
    img: 'https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/1873931/560x504/163711801.jpg',
    title: 'Масштабное обновление каталога инструментов',
    description:
        'С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.',
    date: new Date(2024, 3, 12),
};

onBeforeMount(async () => {
    if (products.value.length === 0) {
        await productsStore.setProducts();
    }
});
</script>

<style module></style>
