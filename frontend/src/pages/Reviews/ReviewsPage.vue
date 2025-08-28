<template>
    <BasePage :links="links" title="Отзывы">
        <ReviewCard
            author="test"
            :date="new Date()"
            text="test test test test test"
            :images="[
                'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
                'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
            ]"
        />
    </BasePage>
</template>

<script setup lang="ts">
import { BasePage } from '@/widgets';
import ReviewCard from './ui/ReviewCard.vue';
import type { Link } from '@/shared/types';

const links: Link[] = [
    { title: 'Главная', link: '/' },
    { title: 'Отзывы', link: '/reviews' },
];
</script>
