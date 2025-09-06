<template>
    <BasePage>
        <TopSlider />
        <AdvantagesComponent />
        <ComponentsList
            :component="ProductCategoryCard"
            :items="categories"
            propName="card"
            itemKey="id"
        />
        <ComponentsList
            :component="PromotionCard"
            :items="promotionsCardsStore.promotionCards"
            prop-name="card"
            item-key="id"
        />
        <ComponentsList
            :component="ProductCard"
            :items="productsCardsStore.products"
            prop-name="card"
            item-key="id"
        />
        <BrandsList />
        <AboutMagazine />
        <NewsSection />
        <ComponentsList
            :component="NewsCard"
            :items="newsCardsStore.newsCards"
            prop-name="card"
            item-key="id"
        />
    </BasePage>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useNewsCardsStore } from '@/entities/news/model';
import { useProductCardsStore } from '@/entities/product/model';
import { usePromotionCardsStore } from '@/entities/promotion/model';
import { NewsCard } from '@/entities/news/ui';
import { ProductCard } from '@/entities/product/ui';
import { PromotionCard } from '@/entities/promotion/ui';
import {
    AdvantagesComponent,
    NewsSection,
    ProductCategoryCard,
} from '@/pages/Main/ui';
import { BasePage, ComponentsList } from '@/widgets';
import { categories } from './config';
import { AboutMagazine, BrandsList, TopSlider } from './ui';

const promotionsCardsStore = usePromotionCardsStore();
const newsCardsStore = useNewsCardsStore();
const productsCardsStore = useProductCardsStore();

onBeforeMount(async () => {
    await promotionsCardsStore.setPromotions(1, 4);
    await newsCardsStore.setNews(1, 4);
    await productsCardsStore.setProducts(1, 5);
});
</script>
