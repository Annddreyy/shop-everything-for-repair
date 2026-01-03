<template>
    <BasePage :breadcrumbs="breadcrumbs" title="Отзывы">
        <div class="container">
            <div class="reviews">
                <div class="buttons">
                    <BaseButton
                        text="Сначала новые"
                        :bg-color="Colors.GRAY"
                        :text-color="Colors.BLUE"
                        @callback="sortType = SortTypes.NEW_FIRST"
                    />
                    <BaseButton
                        text="Сначала старые"
                        :bg-color="Colors.GRAY"
                        :text-color="Colors.BLUE"
                        @callback="sortType = SortTypes.OLD_FIRST"
                    />
                </div>
                <div class="reviews-cards">
                    <ReviewCard
                        v-for="review in reviews"
                        :key="review.text"
                        v-bind="review"
                    />
                </div>
            </div>
            <PagesAsideBlock />
        </div>
        <Pagination
            v-model="currentPage"
            :pages-count="reviewsStore.pagesCount"
        />
    </BasePage>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { ReviewCard, useReviewsStore } from '@/entities/review';
import { BaseButton, Colors, Pagination } from '@/shared/ui';
import { PagesAsideBlock } from '@/widgets';

import BasePage from './BasePage.vue';

enum SortTypes {
    OLD_FIRST,
    NEW_FIRST,
}

const breadcrumbs: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'Отзывы', link: '/reviews' },
];

const reviewsStore = useReviewsStore();
const { reviews } = storeToRefs(reviewsStore);
await reviewsStore.getReviews();
reviews.value = [];

const currentPage = ref(1);
const sortType = ref(SortTypes.NEW_FIRST);

watch(
    currentPage,
    async () => await reviewsStore.getReviews(currentPage.value),
);
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.top {
    @extend .row;
    gap: 20px;

    .reviews-cards {
        @extend .column;
        gap: 30px;
        flex: 4;

        margin-bottom: 60px;
    }
}
</style>
