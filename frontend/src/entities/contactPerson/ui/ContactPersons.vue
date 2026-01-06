<template>
    <div class="contact-persons">
        <ContactPersonCard
            v-for="contactPerson in contactPersons"
            :key="contactPerson.id"
            v-bind="contactPerson"
        />
    </div>
</template>

<script setup lang="ts">
import type { ContactPerson } from '../model/useContactPersons';
import ContactPersonCard from './ContactPersonCard.vue';

const { contactPersons } = defineProps<{
    contactPersons: ContactPerson[];
}>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.contact-persons {
    @extend .grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 23px;
}
</style>
