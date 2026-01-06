<template>
    <BasePage>
        <div class="container">
            <TopSlider :promotions="sliderPromotions" />
            <Advantages
                class="advantages"
                :advantages="advantagesStore.advantages"
            />
            <ComponentsList
                :component="ProductCategoryCard"
                :items="productCategoriesStore.productCategories"
                propName="card"
                itemKey="id"
            />
            <ComponentsList
                :component="PromotionCard"
                :items="promotions"
                prop-name="card"
                item-key="id"
            />
            <ComponentsList
                :component="ProductCard"
                :items="products"
                prop-name="card"
                item-key="id"
            />
        </div>
        <BrandsList :brands="brands" />
        <AboutMagazine />
        <LastNews class="news" :news="news" />
    </BasePage>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import {
    useProductsStore,
    ProductCard,
    useProductCategoriesStore,
    ProductCategoryCard,
} from '@/entities/product';
import { usePromotionsStore, PromotionCard } from '@/entities/promotion';
import { Advantages, useAdvantagesStore } from '@/entities/advantage';
import { BrandsList, useBrandsStore } from '@/entities/brand';
import { useNewsStore } from '@/entities/news';

import { ComponentsList } from '@/shared/ui';
import { LastNews } from '@/widgets';

import BasePage from '../BasePage.vue';
import TopSlider from './TopSlider.vue';
import AboutMagazine from './AboutMagazine/AboutMagazine.vue';

const promotionsStore = usePromotionsStore();
const productsStore = useProductsStore();
const advantagesStore = useAdvantagesStore();
const productCategoriesStore = useProductCategoriesStore();
const newsStore = useNewsStore();
const brandsStore = useBrandsStore();

const { promotions } = storeToRefs(promotionsStore);
const { brands } = storeToRefs(brandsStore);
const { news } = storeToRefs(newsStore);
const { products } = storeToRefs(productsStore);

await Promise.allSettled([
    newsStore.getNews(),
    productsStore.getProducts(),
    promotionsStore.getPromotions(),
    advantagesStore.getAdvantages(),
    productCategoriesStore.getCategories(),
    brandsStore.getBrands(),
]);

const sliderPromotions = computed(() =>
    promotions.value.filter((promotion) => promotion.isSliderPromotion),
);
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.advantages {
    margin-top: 50px;
    margin-bottom: 55px;
}

.news {
    margin-top: 90px;
    margin-bottom: 110px;
}

.news-skeletons {
    @extend .row;
    column-gap: 12px;
    row-gap: 24px;
    flex-wrap: wrap;

    &__skeleton {
        @extend .column;
        gap: 12px;

        width: 390px;
    }
}
</style>
