<template>
    <BasePage :links="links" :title="productStore.title">
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
    </BasePage>
</template>

<script setup lang="ts">
import { useProductStore } from '@/entities/product/model/productCardsStore';
import type { Link } from '@/types';
import { BasePage } from '@/widgets';
import { transliterate } from 'transliteration';
import Advantages from './ui/AdvantagesComponent.vue';
import Buy from './ui/BuyComponent.vue';
import ProductMainCharacteristics from './ui/ProductMainCharacteristics.vue';
import Slider from './ui/SliderComponent.vue';
import Tabs from './ui/TabsComponent.vue';

const productStore = useProductStore();

const links: Link[] = [
    { title: 'Стройоптторг', link: '/' },
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
