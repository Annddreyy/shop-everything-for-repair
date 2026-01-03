<template>
    <article class="advantage">
        <img :src="img" :alt="description" class="advantage__img" />
        <span class="advantage__description">
            {{ description }}
        </span>
    </article>
</template>

<script setup lang="ts">
import type { Advantage } from '../model/useAdvantage';

defineProps<Advantage>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.advantage {
    @extend .row-a-c;
    gap: 11px;

    &__img {
        width: 21px;
        height: 16px;
        object-fit: cover;
    }
}
</style>
