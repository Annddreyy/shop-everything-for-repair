<template>
    <div class="slider">
        <template v-if="componentsList.length">
            <BaseButton
                class="slider__button"
                text="<"
                :bg-color="Colors.WHITE"
                :text-color="Colors.BLACK"
                is-round
                @click="setPrevios"
            />
            <component
                :is="componentElem"
                v-bind="componentsList[currentComponentIndex]"
                :count-of-components="componentsList.length"
                :current-component-index="currentComponentIndex"
            />
            <BaseButton
                class="slider__button"
                text=">"
                :bg-color="Colors.WHITE"
                :text-color="Colors.BLACK"
                is-round
                @click="setNext"
            />
        </template>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import type { Component } from 'vue';
import { Colors } from './types';
import BaseButton from './BaseButton.vue';

const { componentsList } = defineProps<{
    componentElem: Component;
    componentsList: object[];
}>();

const currentComponentIndex = ref(0);

let timer: NodeJS.Timeout | undefined;

onMounted(() => {
    timer = setInterval(() => setNext(), 2000);
});

onUnmounted(() => clearTimer());

function setNext() {
    clearTimer();
    if (currentComponentIndex.value + 1 < componentsList.length) {
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
        currentComponentIndex.value = componentsList.length;
    }
    createTimer();
}

function createTimer() {
    timer = setInterval(() => setNext(), 2000);
}

function clearTimer() {
    clearInterval(timer);
}
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.slider {
    @extend .row-a-c;

    position: relative;

    width: 100%;

    &__button {
        @extend .column-c;
        position: absolute;

        width: 60px;
        height: 60px;

        font-size: 21px;
        box-shadow: 0 4px #0000000d;

        &:first-child {
            left: 0;
            transform: translateX(-50%);
        }

        &:last-child {
            right: 0;
            transform: translateX(50%);
        }
    }
}
</style>
