<template>
    <HeaderComponent />
    <AdvantagesComponent />
    <BreadCrumbs :links="links" />
    <PaginationElement />
    <ComponentsList
        :component="ProductCategoryCard"
        :items="categories"
        propName="card"
        itemKey="id"
    />
    <ComponentsList
        :component="PromotionCard"
        :items="promotions.getPromotions.slice(0, 4)"
        prop-name="card"
        item-key="id"
    />
    <ComponentsList
        :component="ProductCard"
        :items="products.getProducts"
        prop-name="card"
        item-key="id"
    />
    <BrandsList />
    <AboutMagazine />
    <div class="container">
        <section :class="$style.newsSection">
            <div :class="$style.top">
                <h2 :class="$style.title">Последние новости</h2>
                <button :class="$style.button">Больше новостей</button>
            </div>
            <ComponentsList
                :component="NewsCardComponent"
                :items="news.getNewsCards.slice(0, 4)"
                prop-name="card"
                item-key="id"
            />
        </section>
    </div>
    <FooterComponent />
</template>

<script setup lang="ts">
import { useNewsStore } from '@/entities/news_card/model/newsStore';
import NewsCardComponent from '@/entities/news_card/ui/NewsCardComponent.vue';
import { useProductStore } from '@/entities/product_card/model/productStore';
import ProductCard from '@/entities/product_card/ui/ProductCard.vue';
import { usePromotionCardsStore } from '@/entities/promotion_card/model/promotionCardsStore';
import PromotionCard from '@/entities/promotion_card/ui/PromotionCard.vue';
import { categories } from '@/pages/Main/config/productCategoryCards/categories';
import AdvantagesComponent from '@/pages/Main/ui/Advantages/AdvantagesComponent.vue';
import BreadCrumbs from '@/shared/ui/BreadCrumbs/BreadCrumbs.vue';
import PaginationElement from '@/shared/ui/PaginationElement/PaginationElement.vue';
import ProductCategoryCard from '@/pages/Main/ui/ProductCategoryCard/ProductCategoryCard.vue';
import ComponentsList from '@/widgets/ComponentsList/ComponentsList.vue';
import FooterComponent from '@/widgets/Footer/FooterComponent.vue';
import HeaderComponent from '@/widgets/Header/HeaderComponent.vue';
import { onBeforeMount } from 'vue';
import type { Link } from '@/shared/types/link';

const links: Link[] = [{ link: '/', title: 'Главная' }];

const promotions = usePromotionCardsStore();
const news = useNewsStore();
const products = useProductStore();

onBeforeMount(() => {
    promotions.setPromotions();
    news.setNews();
    products.setProducts(1, 4);
});
</script>

<style lang="scss" module>
@use './../../assets/scss/variables' as *;
@use './../../assets/scss/display' as *;

.newsSection {
    @extend .column;
    padding: $base-padding-9 0;

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
