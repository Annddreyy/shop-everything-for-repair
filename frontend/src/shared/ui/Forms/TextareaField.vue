<template>
    <textarea
        :name="name"
        :id="id"
        :inputmode="inputmode"
        :placeholder="placeholder"
    />
</template>

<script setup lang="ts">
defineProps<{
    name: string;
    id: string;
    inputmode?:
        | 'text'
        | 'tel'
        | 'email'
        | 'search'
        | 'url'
        | 'none'
        | 'numeric'
        | 'decimal';
    placeholder?: string;
}>();
</script>

<style lang="scss" scoped>
textarea {
    resize: vertical;
    min-height: 89px;
    padding: 25px 20px;
    border: 1px solid #ebeef0;
    border-radius: 7px;

    box-shadow: 0 1px 2px #00000012 inset;

    font-size: 15px;
}
</style>
