<template>
    <HeaderComponent />
    <ComponentsList
        :component="ProductCategoryCard"
        :items="categories"
        propName="card"
        itemKey="id"
    />
    <FooterComponent />
</template>

<script setup lang="ts">
import { categories } from '@/shared/config/productCategoryCards/categories';
import ProductCategoryCard from '@/shared/ui/ProductCategoryCard/ProductCategoryCard.vue';
import ComponentsList from '@/widgets/ComponentsList/ComponentsList.vue';
import FooterComponent from '@/widgets/Footer/FooterComponent.vue';
import HeaderComponent from '@/widgets/Header/HeaderComponent.vue';
</script>
