<template>
    <RouterLink :to="`/news/${id}`">
        <article class="news-card">
            <img
                :src="img"
                :alt="title"
                class="news-card__img"
                @error="onImageNotLoad"
            />
            <h3 class="news-card__title">{{ title }}</h3>
            <p class="news-card__description">{{ description }}</p>
            <time :datetime="date.toDateString()" class="news-card__date">{{
                formatDate(date)
            }}</time>
        </article>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { formatDate } from '@/shared/lib/workingWithDate/formatDate.lib';
import defaultImg from '@/assets/images/img_not_found.png';
import type { NewsCard } from '../types/news.types';

defineProps<NewsCard>();

const onImageNotLoad = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.src = defaultImg;
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;

.news-card {
    @extend .column;
    width: 390px;

    &__img {
        width: 100%;
        height: 210px;
        object-fit: cover;
        border-radius: $base-border-radius-2;
    }

    &__title {
        font-size: 20px;
    }

    &__description {
        font-size: var(--fz-medium);
    }

    &__date {
        font-size: var(--fz-small);
    }
}
</style>
