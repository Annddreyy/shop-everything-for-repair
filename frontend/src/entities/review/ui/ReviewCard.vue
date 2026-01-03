<template>
    <article class="review-card">
        <div class="review-card__top">
            <h3 class="review-card__author">{{ author }}</h3>
            <time
                :datetime="parsedDate.toISOString()"
                class="review-card__date"
            >
                {{ formatDate(parsedDate) }}
            </time>
        </div>
        <p class="review-card__text">{{ text }}</p>
        <div class="review-card__images">
            <img v-for="img in images" :key="img" :src="img" :alt="img" />
        </div>
    </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { formatDate } from '@/shared/libs/date';
import type { Review } from '../model/reviewsStore';

const { date } = defineProps<Review>();

const parsedDate = computed(() => new Date(date));
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.review-card {
    @extend .column;
    gap: 10px;

    width: 100%;
    padding: 25px;

    border: 1px solid #edf0f2;
    border-radius: 8px;

    &__top {
        time {
            font-size: 15px;
            color: #60656c;
        }
    }

    &__author {
        font-size: 17px;
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
