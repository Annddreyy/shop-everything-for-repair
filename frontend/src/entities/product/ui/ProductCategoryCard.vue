<template>
    <RouterLink :to="link" class="product-category-card">
        <Skeletor
            v-if="imgIsLoading"
            width="100%"
            height="210px"
            :style="{
                borderRadius: '8px',
                position: 'absolute',
            }"
        />
        <img
            :src="img"
            :alt="title"
            class="product-category-card__img"
            @error="onLoadError"
            @load="onLoad"
        />
        <h3 class="product-category-card__title">{{ title }}</h3>
    </RouterLink>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onLoadError } from '@/shared/libs/ui';
import type { ProductCategory } from '../model/useProductCategories';

defineProps<ProductCategory>();

const imgIsLoading = ref(false);

const onLoad = () => {
    imgIsLoading.value = false;
};
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.product-category-card {
    @extend .column-c;
    gap: 10px;

    width: 185px;
    height: 200px;

    padding: 12px 16px;

    background-color: #f3f4f5;
    border-radius: 15px;

    &__img {
        max-width: 138px;
        max-height: 123px;
    }

    &__title {
        font-size: 15px;
        font-weight: 400;
        text-align: center;
    }
}
</style>
