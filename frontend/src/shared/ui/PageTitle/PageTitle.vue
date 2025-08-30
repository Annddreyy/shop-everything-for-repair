<template>
    <div class="container">
        <h1 class="page-title">{{ title }}</h1>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>

<style lang="scss" scoped>
.page-title {
    font-size: 48px;
    margin-top: 20px;
    margin-bottom: 30px;
}
</style>
