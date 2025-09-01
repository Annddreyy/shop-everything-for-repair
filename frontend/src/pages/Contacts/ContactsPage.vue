<template>
    <BasePage :links="links" title="Контакты">
        <Map />
        <ContactPersons />
        <RegionsComponent />
        <FeedbackForm />
    </BasePage>
</template>

<script setup lang="ts">
import type { Link } from '@/types';
import BasePage from '@/widgets/BasePage.vue';
import { ContactPersons, FeedbackForm, RegionsComponent } from './ui';
import Map from './ui/Map.vue';

const links: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'Контакты', link: '/contacts' },
];
</script>
