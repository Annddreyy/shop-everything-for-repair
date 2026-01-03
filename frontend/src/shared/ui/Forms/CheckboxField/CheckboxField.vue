<template>
    <label class="checkbox">
        <input
            type="checkbox"
            :id="id"
            :name="name"
            v-model="checked"
            class="checkbox__input"
        />
        <span class="checkbox__box"></span>
        <span class="checkbox__label">{{ label }}</span>
    </label>
</template>

<script setup lang="ts">
defineProps<{
    id: string;
    name: string;
    label: string;
}>();

const checked = defineModel<boolean>({ default: false });
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.checkbox {
    @extend .row;
    gap: 10px;
    align-items: center;

    user-select: none;
    cursor: pointer;

    &__input {
        position: absolute;

        pointer-events: none;
        opacity: 0;

        &:checked ~ .checkbox__box {
            background-color: #186fd4;
            border-color: #186fd4;

            &::after {
                position: absolute;
                content: '';
                left: 8px;
                top: 4px;

                width: 6px;
                height: 10px;

                border: solid white;
                border-width: 0 2px 2px 0;

                transform: rotate(45deg);
            }
        }
    }

    &__box {
        flex-shrink: 0;

        position: relative;

        width: 26px;
        height: 26px;

        border: 1px solid #dfe0e2;
        border-radius: 4px;

        transition: all 0.2s ease;
    }

    &__label {
        font-size: 14px;
    }
}
</style>
