<template>
    <HeaderComponent />
    <ComponentsList
        :component="ProductCategoryCard"
        :items="categories"
        propName="card"
        itemKey="id"
    />
    <ComponentsList
        :component="PromotionCard"
        :items="store.getPromotions"
        prop-name="card"
        item-key="id"
    />
    <FooterComponent />
</template>

<script setup lang="ts">
import { usePromotionCardsStore } from '@/entities/promotion/model/promotionCardsStore';
import PromotionCard from '@/entities/promotion/ui/PromotionCard.vue';
import { categories } from '@/shared/config/productCategoryCards/categories';
import ProductCategoryCard from '@/shared/ui/ProductCategoryCard/ProductCategoryCard.vue';
import ComponentsList from '@/widgets/ComponentsList/ComponentsList.vue';
import FooterComponent from '@/widgets/Footer/FooterComponent.vue';
import HeaderComponent from '@/widgets/Header/HeaderComponent.vue';
import { onBeforeMount } from 'vue';

const store = usePromotionCardsStore();

onBeforeMount(() => {
    store.setPromotions();
});
</script>
