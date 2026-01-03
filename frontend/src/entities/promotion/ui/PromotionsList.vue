<template>
    <div class="promotion-list">
        <PromotionCard
            v-for="promotion in promotions"
            v-bind="promotion"
            with-description
        />
    </div>
</template>

<script lang="ts" setup>
import type { Promotion } from '../model/usePromotions';
import PromotionCard from './PromotionCard.vue';

defineProps<{
    promotions: Promotion[];
}>();
</script>

<style lang="scss" scoped>
.promotion-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    row-gap: 20px;
    column-gap: 25px;
}
</style>
