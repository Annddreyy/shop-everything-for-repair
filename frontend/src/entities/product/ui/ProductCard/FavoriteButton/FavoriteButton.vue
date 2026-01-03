<template>
    <div class="like-button">
        <img
            :src="likeIcon"
            :alt="
                !isFavoriteProduct
                    ? 'Добавить в избранное'
                    : 'Убрать из избранного'
            "
        />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { isFavoriteProduct } = defineProps<{
    isFavoriteProduct?: boolean;
}>();

const likeIcon = computed(() =>
    isFavoriteProduct
        ? './assets/like-fill-icon.svg'
        : './assets/like-icon.svg',
);
</script>

<style lang="scss" scoped>
.like-button {
    width: 40px;
    height: 40px;
    padding: 7.5px 3.5px;

    display: flex;

    border: 1px solid #f3f4f5;
    border-radius: 7px;
}
</style>
