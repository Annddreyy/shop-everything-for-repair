<template>
    <BasePage :breadcrumbs="breadcrumbs" title="Контакты">
        <Map />
        <ContactPersons :contact-persons="contactPersonsStore.contactPersons" />
        <Regions :regions="regionsStore.regions" />
        <FeedbackForm />
    </BasePage>
</template>

<script setup lang="ts">
import { BasePage } from '@/pages';
import {
    ContactPersons,
    useContactPersonsStore,
} from '@/entities/contactPerson';
import { Regions, useRegionsStore } from '@/entities/region';

import FeedbackForm from './FeedbackForm.vue';
import Map from './Map/Map.vue';

const breadcrumbs: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'Контакты', link: '/contacts' },
];

const regionsStore = useRegionsStore();
const contactPersonsStore = useContactPersonsStore();

await Promise.allSettled([
    regionsStore.getRegions(),
    contactPersonsStore.getContactPersons(),
]);
</script>
