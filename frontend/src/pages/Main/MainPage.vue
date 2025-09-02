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
        <div class="container">
            <section class="news-section">
                <div class="top">
                    <h2 class="title">Последние новости</h2>
                    <button class="button">Больше новостей</button>
                </div>
            </section>
        </div>
        <ComponentsList
            :component="NewsCard"
            :items="newsCardsStore.newsCards"
            prop-name="card"
            item-key="id"
        />
    </BasePage>
</template>

<script setup lang="ts">
import { useNewsCardsStore } from '@/entities/news/model';
import { useProductCardsStore } from '@/entities/product/model';
import { usePromotionCardsStore } from '@/entities/promotion/model';
import { categories } from './config';
import { NewsCard } from '@/entities/news/ui';
import { ProductCard } from '@/entities/product/ui';
import { PromotionCard } from '@/entities/promotion/ui';
import { AdvantagesComponent } from '@/pages/Main/ui';
import { ProductCategoryCard } from '@/pages/Main/ui';
import { BasePage, ComponentsList } from '@/widgets';
import { onBeforeMount } from 'vue';
import { AboutMagazine, BrandsList } from './ui';
import { TopSlider } from './ui';

const promotionsCardsStore = usePromotionCardsStore();
const newsCardsStore = useNewsCardsStore();
const productsCardsStore = useProductCardsStore();

onBeforeMount(async () => {
    await promotionsCardsStore.setPromotions(1, 4);
    await newsCardsStore.setNews(1, 4);
    await productsCardsStore.setProducts(1, 5);
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;

.news-section {
    @extend .column;
    padding: 0;

    .top {
        @extend .row;
        justify-content: space-between;

        .title {
            font-size: var(--fz-xxl);
        }

        .button {
            color: #117fe3;
            background-color: #f6f8fb;
            padding: 17px 20px;
            border-radius: $base-border-radius;
        }
    }
}
</style>
