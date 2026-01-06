<template>
    <BasePage :breadcrumbs="breadcrumbs" title="Вопрос-ответ">
        <div class="container faq-page">
            <div class="faq">
                <FAQCard
                    v-for="faq in FAQStore.faq"
                    :key="faq.id"
                    class="faq-card"
                    v-bind="faq"
                />
            </div>
            <PagesAsideBlock />
        </div>
    </BasePage>
</template>

<script setup lang="ts">
import { useFAQStore, FAQCard } from '@/entities/faq';
import { PagesAsideBlock } from '@/widgets';
import BasePage from './BasePage.vue';

const breadcrumbs: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'Вопрос-ответ', link: '/faq' },
];

const FAQStore = useFAQStore();
await FAQStore.getFAQ();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.faq-page {
    @extend .row;
    gap: 20px;

    margin-bottom: 110px;
    margin-top: -7px;

    @media (max-width: 1250px) {
        flex-direction: column;
        margin-bottom: 80px;
    }
}

.faq {
    flex: 1;
}
</style>
