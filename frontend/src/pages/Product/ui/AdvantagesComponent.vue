<template>
    <section class="advantages-section">
        <article
            v-for="advantage in advantages"
            :key="advantage.description"
            class="advantages-section__advantage"
        >
            <img
                :src="advantage.img"
                :alt="advantage.description"
                class="advantages-section__img"
            />
            <span class="advantages-section__description">{{
                advantage.description
            }}</span>
        </article>
    </section>
</template>

<script setup lang="ts">
import { advantages } from '@/pages/Main/config/advantages/advantages.config';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;

.advantages-section {
    @extend .column;
    padding: 20px;
    margin-left: 20px;

    border: 1px solid #edf0f2;
    border-radius: 8px;

    &__advantage {
        @extend .row;
    }

    &__img {
        filter: grayscale(1);
    }
}
</style>
