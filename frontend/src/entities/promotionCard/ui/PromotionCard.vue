<template>
    <RouterLink :to="`/promotions/${id}`">
        <article
            :style="{ backgroundImage: `url(${backgroundImg})` }"
            class="promotion-card"
        >
            <h3 class="promotion-card__title">{{ title }}</h3>
            <span class="promotion-card__percent">
                до -{{ promotionPercent }}%
            </span>
        </article>
    </RouterLink>
</template>

<script setup lang="ts">
import type { PromotionCard } from '../types/types';

defineProps<PromotionCard>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;

.promotion__card {
    @extend .column;
    gap: $base-gap-4;

    width: 390px;
    height: 180px;

    padding: 36px 24px;
    border-radius: $base-border-radius-2;
    background-size: cover;

    &__title {
        font-size: var(--fz-large);
    }

    &__percent {
        width: max-content;
        padding: 6px 8px;
        border-radius: $base-border-radius;

        background-color: #011120;

        color: var(--white);
        font-size: 14px;
    }
}
</style>
