<template>
    <div class="compare-button">
        <img
            :src="compareIcon"
            :alt="
                !isCompareProduct
                    ? 'Добавить в избранное'
                    : 'Убрать из избранного'
            "
        />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { isCompareProduct } = defineProps<{
    isCompareProduct?: boolean;
}>();

const compareIcon = computed(() =>
    isCompareProduct
        ? './assets/compare-icon-fill.svg'
        : './assets/compare-icon.svg',
);
</script>

<style lang="scss" scoped>
.compare-button {
    width: 40px;
    height: 40px;

    display: flex;
    padding: 7.5px 3.5px;

    border: 1px solid #f3f4f5;
    border-radius: 7px;
}
</style>
