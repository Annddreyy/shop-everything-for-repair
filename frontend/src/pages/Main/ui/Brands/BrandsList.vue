<template>
    <section class="brands">
        <div class="container">
            <h2 class="brands__title">Популярные бренды</h2>
        </div>
        <ComponentsList
            :component="BrandCard"
            :items="brands"
            prop-name="card"
            item-key="id"
        />
    </section>
</template>

<script setup lang="ts">
import { ComponentsList } from '@/widgets';
import { brands } from '../../config';
import BrandCard from './BrandCard.vue';
</script>

<style lang="scss" module>
@use '@/assets/scss/display' as *;

.brands {
    @extend .column;
    gap: 40px;

    background-color: #f9fafb;
    padding: 50px 0;

    &__title {
        @extend .row;
        width: 100%;

        text-align: start;
        align-self: flex-start;
        justify-self: self-start;

        font-size: var(--fz-xxl);
    }
}
</style>
