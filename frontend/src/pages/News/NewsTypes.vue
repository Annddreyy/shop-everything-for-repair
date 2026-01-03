<template>
    <section class="headings">
        <h3 class="headings__title">Рубрики</h3>
        <ul class="headings__list">
            <li
                :class="[
                    'headings__type',
                    { 'headings__type--active': !currentNewsType },
                ]"
                @click="currentNewsType = undefined"
            >
                Все публикации
                <span class="headings__count">{{ allNewsCount }}</span>
            </li>
            <li
                :class="[
                    'headings__type',
                    { 'headings__type--active': currentNewsType === 'news' },
                ]"
                @click="currentNewsType = 'news'"
            >
                Новости
                <span class="headings__count">{{ news }}</span>
            </li>
            <li
                :class="[
                    'headings__type',
                    { 'headings__type--active': currentNewsType === 'article' },
                ]"
                @click="currentNewsType = 'article'"
            >
                Статьи
                <span class="headings__count">{{ article }}</span>
            </li>
            <li
                :class="[
                    'headings__type',
                    { 'headings__type--active': currentNewsType === 'tips' },
                ]"
                @click="currentNewsType = 'tips'"
            >
                Советы
                <span class="headings__count">{{ tips }}</span>
            </li>
            <li
                :class="[
                    'headings__type',
                    { 'headings__type--active': currentNewsType === 'review' },
                ]"
                @click="currentNewsType = 'review'"
            >
                Обзоры
                <span class="headings__count">{{ review }}</span>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import type { NewsType } from '@/entities/news';
import { computed, ref, watch } from 'vue';

const { news, review, tips, article } = defineProps<{
    news: number;
    review: number;
    tips: number;
    article: number;
}>();

const emit = defineEmits<{
    setType: [type?: NewsType];
}>();

const currentNewsType = ref<NewsType | undefined>();

const allNewsCount = computed(() => news + review + tips + article);

watch(currentNewsType, () => {
    emit('setType', currentNewsType.value);
});
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.headings {
    width: 331px;
    height: max-content;

    padding: 20px 25px;

    border-radius: 8px;
    border: 1px solid #ececec;

    &__title {
        font-size: 23px;
        color: #1d1d27;
        font-weight: 400;
    }

    &__list {
        @extend .column;
        list-style: none;
    }

    &__type {
        @extend .row-a-c;
        justify-content: space-between;

        padding: 20px 0;

        border-bottom: 1px solid #f4f4f4;
        cursor: pointer;

        &--active {
            font-weight: bold;
            color: #186fd4;

            .headings__count {
                color: #186fd4;
            }
        }
    }

    &__count {
        padding: 5px 10px;

        border-radius: 50%;
        border: 1px solid #f3f3f3;

        font-size: 11px;
        color: #686868;
    }
}
</style>
