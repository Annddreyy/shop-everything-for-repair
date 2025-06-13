<template>
    <section :class="$style.brands">
        <div class="container">
            <h2 :class="$style.title">Популярные бренды</h2>
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
import ComponentsList from '@/widgets/ComponentsList/ComponentsList.vue';
import BrandCard from './BrandCard.vue';
import { brands } from '@/shared/config/brands/brands';
</script>

<style lang="scss" module>
@use './../../../assets/scss/variables' as *;
@use './../../../assets/scss/display' as *;

.brands {
    @extend .column;
    gap: $base-gap-2;

    background-color: #F9FAFB;
    padding: $base-padding-9 0;

    .title {
        width: 100%;
        display: flex;
        text-align: start;
        align-self: flex-start;
        justify-self: self-start;
        font-size: var(--fz-xxl);
    }
}
</style>
