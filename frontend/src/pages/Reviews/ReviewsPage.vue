<template>
    <BasePage :links="links" title="Отзывы">
        <div class="container top">
            <div class="reviews-cards">
                <ReviewCard
                    v-for="review in reviewsStore.reviews"
                    :key="review.text"
                    :author="review.userId"
                    :date="review.date"
                    :text="review.text"
                    :images="review.images"
                />
            </div>
            <PagesAsideBlock />
        </div>
        <PaginationElement
            :pages-count="reviewsStore.pagesCount"
            @set-page="(page: number) => getReviewsPage(page)"
        />
    </BasePage>
</template>

<script setup lang="ts">
import { useReviewsStore } from '@/entities/review/model/reviewsStore';
import type { Link } from '@/types';
import { BasePage } from '@/widgets';
import { onMounted } from 'vue';
import { ReviewCard } from '@/entities/review/ui';
import { PaginationElement } from '@/shared/ui';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import PagesAsideBlock from '@/widgets/PagesAsideBlock.vue';

const reviewsStore = useReviewsStore();

const links: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'Отзывы', link: '/reviews' },
];

onMounted(async () => {
    await reviewsStore.getReviews(1, DEFAULT_API_RESPONSE_PAGE_VALUE);
});

const getReviewsPage = async (page: number) => {
    await reviewsStore.getReviews(page, DEFAULT_API_RESPONSE_PAGE_VALUE);
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

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
