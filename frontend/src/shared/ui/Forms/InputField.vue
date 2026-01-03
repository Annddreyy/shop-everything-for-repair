<template>
    <input
        :name="name"
        :id="id"
        :inputmode="inputMode"
        :type="type"
        :placeholder="placeholder"
    />
</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';
import type { InputMode } from '../types';

defineProps<{
    name: string;
    id: string;
    inputMode?: InputMode;
    type: InputTypeHTMLAttribute;
    placeholder?: string;
}>();
</script>

<style lang="scss" scoped>
input {
    padding: 25px 20px;
    border: 1px solid #ebeef0;
    border-radius: 7px;

    box-shadow: 0 1px 2px #00000012 inset;

    font-size: 15px;
}

::placeholder {
    color: #adb1b7;
}
</style>
