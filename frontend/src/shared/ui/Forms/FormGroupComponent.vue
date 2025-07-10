<template>
    <div class="form-group">
        <label :for="id" class="form-group__label">
            {{ label
            }}<span v-if="required" class="form-group__redstar"> *</span>:
        </label>
        <component
            :is="fieldComponent"
            :name="name"
            :id="id"
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

const props = defineProps<{
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
    return props.type === 'textarea' ? TextareaField : InputField;
});
</script>

<style lang="scss" scoped>
@use './../../../assets/scss/display' as *;

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
