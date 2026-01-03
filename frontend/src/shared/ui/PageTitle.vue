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
    margin-top: 0px;
    margin-bottom: 30px;

    font-size: 48px;
}
</style>
