<template>
    <div class="container">
        <section :class="$style.advantages">
            <div
                v-for="advantage in advantages"
                :key="advantage.description"
                :class="$style.advantage"
            >
                <img :src="advantage.img" :alt="advantage.description" />
                <span>{{ advantage.description }}</span>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { advantages } from '@/shared/config/advantages/advantages';
</script>

<style lang="scss" module>
@use './../../../assets/scss/variables' as *;
@use './../../../assets/scss/display' as *;

.advantages {
    @extend .row-a-c;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: $base-margin-9 0;

    .advantage {
        @extend .row;
        gap: $base-gap-2;
    }
}
</style>
