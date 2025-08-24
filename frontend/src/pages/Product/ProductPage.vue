<template>
    <HeaderComponent />
    <BreadCrumbs :links="links" />
    <PageTitle :title="productStore.title" />
    <div class="container">
        <div class="top-part">
            <Slider :images="productStore.images" />
            <div class="product-information">
                <ProductMainCharacteristics
                    :characteristics="productStore.characteristics"
                />
                <Advantages />
            </div>
            <Buy
                :article="productStore.article"
                :count="productStore.count"
                :price="productStore.price"
                :promotion-percent="productStore.promotionPercent"
            />
        </div>
        <Tabs />
    </div>
    <FooterComponent />
</template>

<script setup lang="ts">
import { useProductStore } from '@/entities/product/model/productStore';
import type { Link } from '@/shared/types/link.types';
import { BreadCrumbs } from '@/shared/ui';
import PageTitle from '@/shared/ui/PageTitle/PageTitle.vue';
import { FooterComponent, HeaderComponent } from '@/widgets';
import { transliterate } from 'transliteration';
import ProductMainCharacteristics from './ui/ProductMainCharacteristics/ProductMainCharacteristics.vue';
import Slider from './ui/Slider/SliderComponent.vue';
import Advantages from './ui/AdvantagesComponent.vue';
import Buy from './ui/BuyComponent.vue';
import Tabs from './ui/TabsComponent.vue';

const productStore = useProductStore();

const links: Link[] = [
    { title: 'Главная', link: '/' },
    {
        title: productStore.category,
        link: `/${transliterate(productStore.category)}`,
    },
];
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

.top-part {
    @extend .row;

    .product-information {
        @extend .column;
    }
}
</style>
