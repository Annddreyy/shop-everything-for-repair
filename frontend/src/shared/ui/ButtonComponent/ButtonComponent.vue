<template>
    <div
        :style="{
            color: textColor,
            borderColor: borderColor,
            backgroundColor: bgColor,
            borderRadius: `${isRound && '50%'}`,
            cursor: 'pointer',
        }"
    >
        <img v-if="icon" :src="icon" :alt="text" />
        <span :style="{ color: textColor }">{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
import type { Button } from './types';

defineProps<Button>();
</script>
