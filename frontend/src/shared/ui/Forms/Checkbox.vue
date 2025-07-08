<template>
    <div class="checkbox">
        <input type="checkbox" :id="id" :name="name" required class="checkbox__hidden-checkbox">
        <label :for="id" class="checkbox__label">
            <div class="checkbox__custom-checkbox"></div>
            <span class="checkbox__label-text">{{ label }}</span>
        </label>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    id: string;
    name: string;
    label: string;
}>();
</script>

<style lang="scss" scoped>
@use './../../../assets/scss/display' as *;

.checkbox {
    &__label {
        @extend .row;
        gap: 10px;
    }

    &__hidden-checkbox {
        position: relative;
        opacity: 0;
    }

    &__custom-checkbox {
        width: 26px;
        height: 26px;

        border: 1px solid #DFE0E2;
        border-radius: 4px;
    }
}
</style>
