<template>
    <button
        class="button"
        :style="buttonStyle"
        :type="type"
        @click="$emit('callback')"
    >
        <img v-if="icon" :src="icon" />
        <span :style="`color: ${textColor}`">{{ text }}</span>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Button } from './types';

const props = defineProps<Button>();

defineEmits(['callback']);

const buttonStyle = computed(() => ({
    color: props.textColor || 'initial',
    borderColor: props.borderColor || 'initial',
    backgroundColor: props.bgColor || 'initial',
    borderRadius: `${props.isRound && '50%'}`,
}));
</script>

<style lang="scss" scoped>
.button {
    cursor: pointer;
}
</style>
