<template>
    <BasePage :breadcrumbs="breadcrumbs" title="Контакты">
        <Map />
        <ContactPersons />
        <RegionsComponent />
        <FeedbackForm />
    </BasePage>
</template>

<script setup lang="ts">
import { BasePage } from '@/widgets';
import { ContactPersons, FeedbackForm, RegionsComponent, Map } from './ui';

const breadcrumbs: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'Контакты', link: '/contacts' },
];
</script>
