<template>
    <div class="list">
        <component
            v-for="(item, index) in items"
            :key="itemKey ? (item[itemKey] ?? index) : index"
            :is="component"
            v-bind="item"
            class="list__component"
        />
    </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

const { items } = defineProps<{
    component: Component;
    items: Record<string, unknown>[];
    propName: string;
    itemKey?: string;
}>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.list {
    @extend .row;
    gap: 8px;
    flex-wrap: wrap;
    margin: 64px 0;

    &__component {
        flex: 1;
    }
}
</style>
