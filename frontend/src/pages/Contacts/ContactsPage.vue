<template>
    <HeaderComponent />
    <ContactPersons />
    <RegionsComponent />
    <FeedbackForm />
    <FooterComponent />
</template>

<script setup lang="ts">
import { FooterComponent, HeaderComponent } from '@/widgets';
import { ContactPersons, FeedbackForm, RegionsComponent } from './ui';
</script>
