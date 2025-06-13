<template>
    <div
        :style="{
            color: textColor,
            borderColor: borderColor,
            backgroundColor: bgColor,
            borderRadius: `${isRound && '50%'}`,
        }"
    >
        <span v-if="icon"><img :src="icon" :alt="text" /></span>
        <span :style="{ color: textColor }">{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
import type { Button } from './types';

const { text, icon, textColor, borderColor, bgColor, isRound } = defineProps<Button>();
</script>
