<template>
    <RouterLink :to="`/promotions/${card.id}`">
        <article
            :style="{ backgroundImage: `url(${card.backgroundImg})` }"
            :class="$style.card"
        >
            <h3 :class="$style.title">{{ card.title }}</h3>
            <span :class="$style.promotionPercent"
                >до -{{ card.promotionPercent }}%</span
            >
        </article>
    </RouterLink>
</template>

<script setup lang="ts">
import type { Promotion } from '../types/promotion';

const { card } = defineProps<{ card: Promotion }>();
</script>

<style lang="scss" module>
@use './../../../assets/scss/variables' as *;
@use './../../../assets/scss/display' as *;

.card {
    @extend .column;
    gap: $base-gap-4;

    width: 390px;
    height: 180px;

    padding: 36px 24px;
    border-radius: $base-border-radius-2;
    background-size: cover;

    .title {
        font-size: var(--fz-large);
    }

    .promotionPercent {
        width: max-content;
        padding: 6px 8px;
        border-radius: $base-border-radius;

        background-color: #011120;

        color: var(--white);
        font-size: 14px;
    }
}
</style>
