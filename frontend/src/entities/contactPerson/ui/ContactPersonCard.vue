<template>
    <article class="contact-person">
        <p class="contact-person__title">{{ jobTitle }}</p>
        <p class="contact-person__phone">
            {{ phone }}
            <span v-if="description">({{ description }})</span>
        </p>
    </article>
</template>

<script setup lang="ts">
import type { ContactPerson } from '../model/useContactPersons';

defineProps<ContactPerson>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.contact-person {
    @extend .column;
    gap: 15px;

    padding: 30px 25px;

    border: 1px solid #f2f4f6;
    border-radius: 8px;

    &__title {
        font-size: 15px;
        color: #494d52;
    }

    &__phone {
        font-size: 18px;
        font-style: medium;
        color: #2f3134;
    }
}
</style>
