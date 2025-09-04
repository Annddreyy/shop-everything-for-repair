<template>
    <details class="faq-card">
        <summary class="faq-card__question">{{ question }}</summary>
        <p class="faq-card__answer">{{ answer }}</p>
    </details>
</template>

<script setup lang="ts">
import type { FAQ } from '../types';

defineProps<Omit<FAQ, 'id'>>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

.faq-card {
    &__question {
        position: relative;
        padding: 18.5px 10px;

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

            background-color: #ebf7ff;
            border-radius: 50%;
            color: #186fd4;
        }

        &::-webkit-details-marker {
            display: none;
        }
    }

    &__answer {
        font-size: 16px;
        color: #64676a;
        padding: 20px;
    }
}
</style>
