<template>
    <BasePage :links="links" title="Контакты">
        <ContactPersons />
        <RegionsComponent />
        <FeedbackForm />
    </BasePage>
</template>

<script setup lang="ts">
import type { Link } from '@/shared/types';
import BasePage from '@/widgets/BasePage.vue';
import { ContactPersons, FeedbackForm, RegionsComponent } from './ui';

const links: Link[] = [
    { title: 'Главная', link: '/' },
    { title: 'Контакты', link: '/contacts' },
];
</script>
