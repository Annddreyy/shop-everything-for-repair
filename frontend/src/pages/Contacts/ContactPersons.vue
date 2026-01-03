<template>
    <div class="contact-persons">
        <article
            class="contact-person"
            v-for="contact in contactPersons"
            :key="contact.jobTitle"
        >
            <p class="contact-person__title">{{ contact.jobTitle }}</p>
            <p class="contact-person__phone">
                {{ contact.phone }}
                {{ contact.description && `(${contact.description})` }}
            </p>
        </article>
    </div>
</template>

<script lang="ts" setup>
import type { ContactPerson } from '@/entities/contactPerson';

defineProps<{
    contactPersons: ContactPerson[];
}>();
</script>

<style lang="scss" scoped>
.contact-persons {
    @extend .grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
</style>
