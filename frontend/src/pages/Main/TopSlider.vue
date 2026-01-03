<template>
    <div class="slider">
        <BaseButton
            class="slider__button"
            text="<"
            :bg-color="Colors.WHITE"
            :text-color="Colors.BLACK"
            is-round
            @click="setPrevios"
        />
        <template v-for="(promotion, index) in promotions" :key="promotion.id">
            <div
                v-show="currentComponentIndex === index"
                class="top-slider"
                :style="{
                    backgroundImage: `url(${promotion.img || imgNotFoundImg})`,
                }"
            >
                >
                <h1 class="top-slider__title">{{ promotion.title }}</h1>
                <p class="top-slider__description">
                    {{ promotion.description }}
                </p>
                <BaseButton
                    class="top-slider__product-button"
                    text="Перейти к товарам >"
                    :bg-color="Colors.BLACK"
                    :text-color="Colors.WHITE"
                />
            </div>
        </template>
        <BaseButton
            class="slider__button"
            text=">"
            :bg-color="Colors.WHITE"
            :text-color="Colors.BLACK"
            is-round
            @click="setNext"
        />
        <div class="slider__dots">
            <div
                v-for="(_, index) in Array(countOfPromotions)"
                :key="index"
                :class="[
                    'slider__dot',
                    {
                        'slider__dot--active': currentComponentIndex === index,
                    },
                ]"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Promotion } from '@/entities/promotion';
import { imgNotFoundImg } from '@/shared/ui/assets';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { BaseButton, Colors } from '@/shared/ui';

const { promotions } = defineProps<{
    promotions: Promotion[];
}>();

const currentComponentIndex = ref(0);
const countOfPromotions = computed(() => promotions.length);

let timer: NodeJS.Timeout | undefined;

onMounted(() => {
    timer = setInterval(() => setNext(), 2000);
});

onUnmounted(() => clearTimer());

function setNext() {
    clearTimer();
    if (currentComponentIndex.value + 1 < promotions.length) {
        currentComponentIndex.value += 1;
    } else {
        currentComponentIndex.value = 0;
    }
    createTimer();
}

function setPrevios() {
    clearTimer();
    if (currentComponentIndex.value - 1 >= 0) {
        currentComponentIndex.value -= 1;
    } else {
        currentComponentIndex.value = promotions.length;
    }
    createTimer();
}

function createTimer() {
    timer = setInterval(() => setNext(), 5000);
}

function clearTimer() {
    clearInterval(timer);
}
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.slider {
    position: relative;
    width: 100%;

    &__button {
        @extend .column-c;
        position: absolute;

        width: 60px;
        height: 60px;

        font-size: 21px;
        box-shadow: 0 4px #0000000d;

        z-index: 1;

        &:first-of-type,
        &:last-of-type {
            top: 50%;
            transform: translateX(50%);
        }

        &:first-of-type {
            left: 0;
            transform: translatex(-50%);
        }

        &:last-of-type {
            right: 0;
        }
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

.top-slider {
    position: relative;

    width: 100%;
    height: 506px;

    background-repeat: no-repeat;
    background-size: 100%;

    padding: 123px 60px;

    border-radius: 10px;

    &__title {
        max-width: 600px;

        font-size: 48px;
        line-height: 54px;
    }

    &__description {
        max-width: 600px;
        margin-top: 14px;
        margin-bottom: 23px;

        font-size: 17px;
    }

    &__product-button {
        padding: 24px 27px;
        border-radius: 8px;

        * {
            font-size: 17px;
        }
    }
}
</style>
