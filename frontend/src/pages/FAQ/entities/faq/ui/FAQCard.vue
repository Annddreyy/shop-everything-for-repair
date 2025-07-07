<template>
    <div class="container">
        <details v-for="faq in faqList" :key="faq.question" class="faq-card">
            <summary class="faq-card__question">{{ faq.question }}</summary>
            <p class="faq-card__answer">{{ faq.answer }}</p>
        </details>
    </div>
</template>

<script setup lang="ts">
import { faqList } from '@/pages/FAQ/config/faqList';
</script>

<style lang="scss" scoped>
@use './../../../../../assets/scss/display' as *;

.faq-card {
    &__question {
        position: relative;
        padding: 18.5px 10px;

        font-size: 18px;
        color: #2C333D;

        border-bottom: 1px solid #EDF0F2;
        list-style-type: none;

        &::after {
            @extend .row-a-c;
            @extend .row-j-c;

            position: absolute;
            content: "+";
            top: 10px;
            bottom: 10px;
            right: 10px;

            width: 44px;
            height: 44px;

            background-color: #EBF7FF;
            border-radius: 50%;
            color: #186FD4;
        }

        &::-webkit-details-marker {
            display: none;
        }
    }

    &__answer {
        font-size: 16px;
        color: #64676A;
        padding: 20px;
    }
}
</style>
