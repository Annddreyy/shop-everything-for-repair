<template>
    <details class="faq-card">
        <summary class="faq-card__question">{{ question }}</summary>
        <p class="faq-card__answer">{{ answer }}</p>
    </details>
</template>

<script setup lang="ts">
import type { FAQ } from '../model/useFAQ';

defineProps<FAQ>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.faq-card {
    &__question {
        @extend .row;
        justify-content: space-between;

        position: relative;

        padding: 19px 10px;

        font-size: 18px;
        color: #2c333d;

        border-bottom: 1px solid #edf0f2;
        list-style-type: none;

        &::after {
            @extend .row-c;

            position: absolute;
            content: '+';
            top: 10px;
            bottom: 10px;
            right: 10px;

            width: 44px;
            height: 44px;

            border-radius: 50%;

            font-weight: bold;
            color: #186fd4;

            background-color: #ebf7ff;
        }

        &::-webkit-details-marker {
            display: none;
        }
    }

    &__answer {
        padding: 20px;

        font-size: 16px;
        color: #64676a;
    }

    &:open {
        .faq-card__question::after {
            content: '-';
        }
    }
}
</style>
