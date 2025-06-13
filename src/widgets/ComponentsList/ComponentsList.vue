<template>
    <div class="container">
        <div :class="$style.list">
            <component
                v-for="(item, index) in items"
                :key="itemKey ? (item[itemKey] ?? index) : index"
                :is="component"
                v-bind="{ [propName]: item }"
            />
            <RouterLink to="/catalog" :class="$style.card">
                <span :class="$style.img">&gt;</span>
                <h3 :class="$style.title">Перейти в каталог</h3>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
    component: Component;
    items: any[];
    propName: string;
    itemKey?: string;
}>();
</script>

<style lang="scss" module>
@use './../../assets/scss/variables' as *;
@use './../../assets/scss/display' as *;

.list {
    @extend .row;
    flex-wrap: wrap;
}

.card {
    @extend .column-a-c;
    gap: $base-gap-3;

    width: 185px;
    height: 200px;

    border: 2px solid #f6f7f9;
    border-radius: $base-border-radius-3;

    padding: $base-padding-4;

    margin-bottom: $base-margin-4;

    .img {
        @extend .row-a-c;
        @extend .row-j-c;

        margin-top: 30px;

        width: 59px;
        height: 59px;
        border-radius: 50%;

        background-color: #f6f7f9;
        color: #7e8289;

        font-size: 24px;
    }

    .title {
        font-size: var(--fz-medium);
        text-align: center;
    }
}
</style>
