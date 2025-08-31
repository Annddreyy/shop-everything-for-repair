<template>
    <div
        class="top-slider-component"
        :style="{
            backgroundImage: `url(${backgroundImage || imgNotFoundImg})`,
        }"
    >
        <h1 class="top-slider-component__title">{{ title }}</h1>
        <p class="top-slider-component__description">{{ text }}</p>
        <div class="top-slider-component__dots">
            <div
                v-for="(_, index) in Array.from({ length: countOfComponents })"
                :key="index"
                :class="[
                    'top-slider-component__dot',
                    {
                        'top-slider-component__dot--active':
                            currentComponentIndex === index,
                    },
                ]"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TopSliderComponent } from '../../types';
import { defineProps } from 'vue';
import { imgNotFoundImg } from '@/assets/images';

type Props = TopSliderComponent & {
    countOfComponents: number;
    currentComponentIndex: number;
};

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

.top-slider-component {
    width: 100%;
    height: 506px;

    background-repeat: no-repeat;
    background-size: 100% 100%;

    padding: 123px 60px;

    &__title {
        font-size: 48px;
        line-height: 54px;
        max-width: 600px;
    }

    &__description {
        font-size: 17px;
        font-weight: 400;
        margin-top: 14px;
        max-width: 600px;
    }

    &__dots {
        @extend .row;
        gap: 15px;
        position: absolute;
        left: 50%;
        bottom: 30px;

        transform: translateX(-50%);
    }

    &__dot {
        width: 17px;
        height: 17px;
        border: 3px solid white;
        border-radius: 50%;

        &--active {
            border-color: #117fe3;
        }
    }
}
</style>
