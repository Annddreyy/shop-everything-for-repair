<template>
    <div class="like-button">
        <img
            :src="isFavoriteProduct ? likeFillIcon : likeIcon"
            :alt="
                !isFavoriteProduct
                    ? 'Добавить в избранное'
                    : 'Убрать из избранного'
            "
        />
    </div>
</template>

<script setup lang="ts">
import { likeIcon, likeFillIcon } from '@/entities/product/assets';

defineProps<{
    isFavoriteProduct: boolean;
}>();
</script>

<style lang="scss" scoped>
.like-button {
    width: 40px;
    height: 40px;
    display: flex;
    border: 1px solid #f3f4f5;
    padding: 7.5px 3.5px;
    border-radius: 7px;
}
</style>
