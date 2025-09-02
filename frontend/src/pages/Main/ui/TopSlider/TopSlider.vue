<template>
    <div class="container">
        <SliderComponent
            :componentElem="TopSliderComponent"
            :componentsList="componentsList"
        />
    </div>
</template>

<script setup lang="ts">
import { SliderComponent } from '@/shared/ui';
import TopSliderComponent from './TopSliderComponent.vue';

const componentsList = [
    {
        title: 'Электроинструмент для любых нужд',
        text: 'У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.',
        backgroundImage:
            'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop',
    },
    {
        title: 'test 23',
        text: 'test test test test test',
        backgroundImage:
            'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop',
    },
    {
        title: 'test 20',
        text: 'test test test test test',
    },
    {
        title: 'test 23',
        text: 'test test test test test',
    },
    {
        title: 'test 21',
        text: 'test test test test test',
    },
];
</script>
