<template>
    <div class="news-list">
        <NewsCard v-for="oneNews in news" v-bind="oneNews" />
    </div>
</template>

<script lang="ts" setup>
import type { News } from '../model/useNews';
import NewsCard from './NewsCard.vue';

defineProps<{
    news: News[];
}>();
</script>

<style lang="scss" scoped>
.news-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    gap: 16px;
}
</style>
