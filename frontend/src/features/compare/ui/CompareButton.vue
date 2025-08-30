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
import { compareIcon, compareIconFill } from '@/assets/images';

defineProps<{
    isCompareProduct: boolean;
}>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

.compare-button {
    width: 40px;
    height: 40px;
    display: flex;
    border: 1px solid #f3f4f5;
    padding: $base-padding-3;
    border-radius: $base-border-radius;
}
</style>
