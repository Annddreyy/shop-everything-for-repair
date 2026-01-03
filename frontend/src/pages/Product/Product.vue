<template>
    <BasePage :breadcrumbs="breadcrumbs" :title="product.title">
        <div class="container">
            <div class="top-part">
                <div class="top-part__left">
                    <Slider :images="product?.images || []" />
                    <div class="product-information">
                        <Characteristics
                            :characteristics="product.characteristics"
                        />
                        <Advantages :advantages="[]" />
                    </div>
                </div>
                <Buy
                    :article="product.article"
                    :count="product.count"
                    :price="product.price"
                    :promotion-percent="product.promotionPercent"
                />
            </div>
            <Tabs class="tabs" />
        </div>
    </BasePage>
</template>

<script setup lang="ts">
import { transliterate } from 'transliteration';
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/entities/product';
import { Advantages } from '@/entities/advantage';
import Characteristics from './Characteristics.vue';
import BasePage from '../BasePage.vue';
import Tabs from './Tabs.vue';
import Buy from './Buy/Buy.vue';
import Slider from './Slider/Slider.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const productStore = useProductStore();
const { product } = storeToRefs(productStore);
await productStore.getProductInformation(route.path.split('/').at(-1)!);

const breadcrumbs: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    {
        title: product.value.category,
        link: `/${transliterate(product.value.category)}`,
    },
];
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.top-part {
    @extend .row;
    gap: 50px;

    &__left {
        @extend .row;
        gap: 20px;
    }

    .product-information {
        @extend .column;
    }
}

.tabs {
    margin-top: 50px;
    margin-bottom: 91px;
}
</style>
