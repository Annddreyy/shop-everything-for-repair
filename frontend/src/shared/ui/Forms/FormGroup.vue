<template>
    <div class="form-group">
        <label :for="id" class="form-group__label">
            {{ label }}
            <span v-if="required" class="form-group__redstar"> *</span>:
        </label>
        <component
            :is="fieldComponent"
            :id="id"
            :name="name"
            :type="type"
            :inputmode="inputmode"
            :placeholder="placeholder"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, type InputTypeHTMLAttribute } from 'vue';
import TextareaField from './TextareaField.vue';
import InputField from './InputField.vue';

const { type } = defineProps<{
    id: string;
    label: string;
    required?: boolean;

    name: string;
    type: InputTypeHTMLAttribute;
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

const fieldComponent = computed(() => {
    return type === 'textarea' ? TextareaField : InputField;
});
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.form-group {
    @extend .column;
    gap: 10px;

    &__label {
        font-size: 14px;
    }

    &__redstar {
        color: #e52b0e;
    }
}
</style>
