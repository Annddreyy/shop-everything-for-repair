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
            :component="NewsCardComponent"
            :items="newsCardsStore.newsCards"
            prop-name="card"
            item-key="id"
        />
    </BasePage>
</template>

<script setup lang="ts">
import { useNewsCardsStore } from '@/entities/newsCard';
import { useProductCardsStore } from '@/entities/productCard';
import { usePromotionCardsStore } from '@/entities/promotionCard/model/promotionCardsStore';
import { categories } from '@/pages/Main/config/productCategoryCards/categories';
import NewsCardComponent from '@/entities/newsCard/ui/NewsCard.vue';
import ProductCard from '@/entities/productCard/ui/ProductCard.vue';
import PromotionCard from '@/entities/promotionCard/ui/PromotionCard.vue';
import AdvantagesComponent from '@/pages/Main/ui/AdvantagesComponent.vue';
import ProductCategoryCard from '@/pages/Main/ui/ProductCategoryCard.vue';
import { BasePage } from '@/widgets';
import ComponentsList from '@/widgets/ComponentsList.vue';
import { onBeforeMount } from 'vue';
import { AboutMagazine, BrandsList } from './ui';
import TopSlider from './ui/TopSlider/TopSlider.vue';

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
