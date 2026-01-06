<template>
    <section class="advantages">
        <Advantage
            v-for="advantage in advantages"
            :key="advantage.id"
            v-bind="{ ...advantage, withFullDescription }"
        />
    </section>
</template>

<script setup lang="ts">
import type { Advantage as AdvantageType } from '../model/useAdvantage';
import Advantage from './Advantage.vue';

defineProps<{
    advantages: AdvantageType[];
    withFullDescription?: boolean;
}>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.advantages {
    @extend .row-a-c;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: 50px 0;
}
</style>
