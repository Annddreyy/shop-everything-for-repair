<template>
    <article class="review-card">
        <div class="review-card__top">
            <h3 class="review-card__author">{{ author }}</h3>
            <time :datetime="date.toDateString()" class="review-card__date">{{
                formatDate(date)
            }}</time>
        </div>
        <p class="review-card__text">{{ text }}</p>
        <div class="review-card__images">
            <img v-for="img in images" :key="img" :src="img" :alt="img" />
        </div>
    </article>
</template>

<script setup lang="ts">
import { formatDate } from '@/shared/lib';
import type { Review } from '../types';

defineProps<Review>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

.review-card {
    @extend .column;
    width: 100%;
    gap: 10px;
    border: 1px solid #edf0f2;
    border-radius: 8px;
    padding: 25px;

    &__top {
        time {
            font-size: 15px;
            color: #60656c;
        }
    }

    &__author {
        font-size: large;
    }

    &__images {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        img {
            width: 197px;
            height: 111px;
        }
    }
}
</style>
