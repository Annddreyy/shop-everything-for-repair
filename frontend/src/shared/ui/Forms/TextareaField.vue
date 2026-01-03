<template>
    <textarea
        :id="id"
        :name="name"
        :inputmode="inputMode"
        :placeholder="placeholder"
    />
</template>

<script setup lang="ts">
import type { InputMode } from '../types';

defineProps<{
    name: string;
    id: string;
    inputMode?: InputMode;
    placeholder?: string;
}>();
</script>

<style lang="scss" scoped>
textarea {
    min-height: 89px;
    padding: 25px 20px;

    border: 1px solid #ebeef0;
    border-radius: 7px;

    box-shadow: 0 1px 2px #00000012 inset;

    font-size: 15px;

    resize: vertical;
}
</style>
