<template>
    <h1 class="page-title">{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>

<style lang="scss" scoped>
.page-title {
    margin-top: 4px;
    margin-bottom: 20px;

    font-size: 48px;

    @media (max-width: 1250px) {
        font-size: 30px;
    }
}
</style>
