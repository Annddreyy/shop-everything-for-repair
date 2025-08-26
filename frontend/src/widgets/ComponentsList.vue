<template>
    <div class="container">
        <div class="list">
            <component
                v-for="(item, index) in items"
                :key="itemKey ? (item[itemKey] ?? index) : index"
                :is="component"
                v-bind="{ [propName]: item }"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
    component: Component;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: any[];
    propName: string;
    itemKey?: string;
}>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;

.list {
    @extend .row;
    gap: $base-gap-2;
    flex-wrap: wrap;
    margin: $base-margin-8 * 2 0;
}
</style>
