<template>
    <ReviewCard
        author="test"
        :date="new Date()"
        text="test test test test test"
        :images="[
            'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
            'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
        ]"
    />
</template>

<script setup lang="ts">
import ReviewCard from './ui/ReviewCard.vue';
</script>
