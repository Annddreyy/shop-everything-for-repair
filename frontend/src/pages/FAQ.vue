<template>
    <BasePage :breadcrumbs="breadcrumbs" title="Вопрос-ответ">
        <div class="container faq">
            <FAQCard
                v-for="faq in FAQStore.faq"
                :key="faq.id"
                class="faq-card"
                v-bind="faq"
            />
        </div>
    </BasePage>
</template>

<script setup lang="ts">
import { useFAQStore, FAQCard } from '@/entities/faq';
import BasePage from './BasePage.vue';

const breadcrumbs: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'Вопрос-ответ', link: '/faq' },
];

const FAQStore = useFAQStore();
await FAQStore.getFAQ();
</script>

<style lang="scss" scoped>
.faq {
    margin-bottom: 110px;
}
</style>
