<template>
    <BasePage :breadcrumbs="breadcrumbs" title="Вопрос-ответ">
        <div class="container">
            <FAQCard
                v-for="faq in FAQStore.faq"
                :key="faq.id"
                :question="faq.question"
                :answer="faq.answer"
                class="faq-card"
            />
        </div>
    </BasePage>
</template>

<script setup lang="ts">
import { useFAQStore } from '@/entities/faq/model';
import { FAQCard } from '@/entities/faq/ui';
import { BasePage } from '@/widgets';
import { onMounted } from 'vue';

const breadcrumbs: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'Вопрос-ответ', link: '/faq' },
];

const FAQStore = useFAQStore();

onMounted(async () => {
    await FAQStore.getFAQ();
});
</script>
