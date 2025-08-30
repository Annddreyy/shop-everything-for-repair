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
import { likeIcon, likeFillIcon } from '@/assets/images';

defineProps<{
    isFavoriteProduct: boolean;
}>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
.like-button {
    width: 40px;
    height: 40px;
    display: flex;
    border: 1px solid #f3f4f5;
    padding: $base-padding-3;
    border-radius: $base-border-radius;
}
</style>
