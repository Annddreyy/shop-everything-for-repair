<template>
    <section>
        <ComponentsList
            :component="BrandCard"
            :items="brands"
            prop-name="card"
            item-key="id"
            :class="$style.brands"
        />
    </section>
</template>

<script setup lang="ts">
import ComponentsList from '@/widgets/ComponentsList/ComponentsList.vue';
import BrandCard from './BrandCard.vue';
import { brands } from '@/shared/config/brands/brands';
</script>

<style lang="scss" module>
.brands {
    overflow-x: hidden;
    flex-wrap: nowrap !important;
}
</style>
