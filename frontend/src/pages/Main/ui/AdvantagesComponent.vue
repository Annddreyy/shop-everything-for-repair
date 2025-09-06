<template>
    <div class="container">
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
                <span class="advantages-section__description">
                    {{ advantage.description }}
                </span>
            </article>
        </section>
    </div>
</template>

<script setup lang="ts">
import { advantages } from '@/shared/config/advantages';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

.advantages-section {
    @extend .row-a-c;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: 50px 0;

    &__advantage {
        @extend .row;
        gap: 11px;
    }
}
</style>
