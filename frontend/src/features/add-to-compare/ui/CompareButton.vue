<template>
    <div class="compare-button">
        <img
            :src="isCompareProduct ? compareIconFill : compareIcon"
            :alt="
                !isCompareProduct
                    ? 'Добавить в избранное'
                    : 'Убрать из избранного'
            "
        />
    </div>
</template>

<script setup lang="ts">
import { compareIcon, compareIconFill } from '@/entities/product/assets';

defineProps<{
    isCompareProduct: boolean;
}>();
</script>

<style lang="scss" scoped>
.compare-button {
    width: 40px;
    height: 40px;
    display: flex;
    border: 1px solid #f3f4f5;
    padding: 7.5px 3.5px;
    border-radius: 7px;
}
</style>
