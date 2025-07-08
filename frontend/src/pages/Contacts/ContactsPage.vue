<template>
    <HeaderComponent />
    <ContactPersons />
    <Regions />
    <FeedbackForm />
    <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from '@/widgets/Header/HeaderComponent.vue';
import ContactPersons from './ui/ContactPersons/ContactPersons.vue';
import FooterComponent from '@/widgets/Footer/FooterComponent.vue';
import Regions from './ui/Regions/RegionsComponent.vue';
import FeedbackForm from './ui/FeedbackForm/FeedbackForm.vue';
</script>
