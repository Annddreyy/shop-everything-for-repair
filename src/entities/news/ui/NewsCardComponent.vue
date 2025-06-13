<template>
    <RouterLink :to="`/news/${card.id}`">
        <article :class="$style.news">
            <img :src="card.img" alt="" :class="$style.img" />
            <h3 :class="$style.title">{{ card.title }}</h3>
            <p :class="$style.description">{{ card.description }}</p>
            <time :datetime="card.date.toDateString()" :class="$style.date">{{
                formatDate(card.date)
            }}</time>
        </article>
    </RouterLink>
</template>

<script setup lang="ts">
import { formatDate } from '@/shared/lib/formatDate';
import type { NewsCard } from '../types/news';
import { RouterLink } from 'vue-router';

const { card } = defineProps<{
    card: NewsCard;
}>();
</script>

<style lang="scss" module>
@use './../../../assets/scss/variables' as *;
@use './../../../assets/scss/display' as *;

.news {
    width: 390px;
    @extend .column;
    .img {
        width: 100%;
        height: auto;
        border-radius: $base-border-radius-2;
    }

    .title {
        font-size: 20px;
    }

    .description {
        font-size: var(--fz-medium);
    }

    .date {
        font-size: var(--fz-small);
    }
}
</style>
