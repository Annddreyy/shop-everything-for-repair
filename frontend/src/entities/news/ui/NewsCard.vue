<template>
    <RouterLink :to="`/news/${id}`">
        <article class="news-card">
            <Skeletor
                v-if="imgIsLoading"
                width="100%"
                height="210px"
                :style="{
                    borderRadius: '8px',
                    position: 'absolute',
                }"
            />
            <img
                :src="img"
                :alt="title"
                ref="newsCardImg"
                class="news-card__img"
                @error="onLoadError"
                @load="onLoad"
            />
            <Skeletor :size="3" />
            <h3 class="news-card__title">{{ title }}</h3>
            <p class="news-card__description">{{ description }}</p>
            <time
                :datetime="dateOfCreation.toISOString()"
                class="news-card__date"
            >
                {{ formatDate(dateOfCreation) }}
            </time>
        </article>
    </RouterLink>
</template>

<script setup lang="ts">
import { onMounted, ref, useTemplateRef, nextTick } from 'vue';
import { RouterLink } from 'vue-router';
import { Skeletor } from 'vue-skeletor';

import { formatDate } from '@/shared/libs/date';
import { onLoadError } from '@/shared/libs/ui';

import type { News } from '../model/useNews';

defineProps<News>();

const imgIsLoading = ref(true);

const newsCardImg = useTemplateRef('newsCardImg');

onMounted(async () => {
    await nextTick();

    if (newsCardImg.value && newsCardImg.value.complete) {
        imgIsLoading.value = false;
    }
});

const onLoad = () => {
    imgIsLoading.value = false;
};
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.news-card {
    @extend .column;
    position: relative;

    &__img {
        height: 210px;

        object-fit: cover;
        border-radius: 8px;
    }

    &__title {
        font-size: 20px;
    }

    &__description {
        margin-top: 4px;

        font-size: 16px;
    }

    &__date {
        font-size: 13px;
    }
}
</style>
