<template>
    <div class="slider">
        <template v-if="componentsList.length > 0">
            <ButtonComponent
                v-if="currentComponentIndex !== 0"
                text="<"
                :bg-color="Colors.WHITE"
                :text-color="Colors.BLACK"
                :is-round="true"
                @click="setPrevios"
                class="slider__button"
            />
            <component
                :is="componentElem"
                v-bind="componentsList[currentComponentIndex]"
                :count-of-components="componentsList.length"
                :current-component-index="currentComponentIndex"
            />
            <ButtonComponent
                v-if="currentComponentIndex !== componentsList.length - 1"
                text=">"
                :bg-color="Colors.WHITE"
                :text-color="Colors.BLACK"
                :is-round="true"
                @click="setNext"
                class="slider__button"
            />
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, type Component } from 'vue';
import { ButtonComponent } from '..';
import { Colors } from '../ButtonComponent/types';

const { componentsList } = defineProps<{
    componentElem: Component;
    componentsList: object[];
}>();

const currentComponentIndex = ref(0);

const setNext = () => {
    if (currentComponentIndex.value + 1 < componentsList.length) {
        currentComponentIndex.value += 1;
    }
};

const setPrevios = () => {
    if (currentComponentIndex.value - 1 >= 0) {
        currentComponentIndex.value -= 1;
    }
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

.slider {
    @extend .row-a-c;
    position: relative;
    width: 100%;

    &__button {
        @extend .column-c;
        position: absolute;
        width: 60px;
        height: 60px;
        box-shadow: 0 4px #0000000d;
        font-size: 21px;
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
