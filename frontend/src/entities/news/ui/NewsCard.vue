<template>
    <RouterLink :to="`/news/${id}`">
        <article class="news-card">
            <Skeleton v-if="imgIsLoading" width="390px" height="210px" />
            <img
                :src="img"
                :alt="title"
                class="news-card__img"
                @error="onLoadError"
                @load="onLoad"
            />
            <h3 class="news-card__title">{{ title }}</h3>
            <p class="news-card__description">{{ description }}</p>
            <time :datetime="date.toISOString()" class="news-card__date">
                {{ formatDate(date) }}
            </time>
        </article>
    </RouterLink>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

import { Skeleton } from '@/shared/ui';
import { formatDate, onLoadError } from '@/shared/lib';

import type { NewsCard } from '../types';

defineProps<WithId<NewsCard>>();

const imgIsLoading = ref(true);

const onLoad = () => {
    imgIsLoading.value = false;
};

onMounted(() => {
    nextTick(() => {
        const imageEl =
            document.querySelector<HTMLImageElement>('.news-card__img');
        if (imageEl && imageEl.complete) {
            imgIsLoading.value = false;
        }
    });
});
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
