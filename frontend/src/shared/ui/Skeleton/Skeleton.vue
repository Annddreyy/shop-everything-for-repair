<template>
    <div class="skeleton" :style="{ width, height, top, left }" />
</template>

<script setup lang="ts">
defineProps({
    width: { type: String, default: '100%' },
    height: { type: String, default: '1rem' },
    top: { type: String, default: '0' },
    left: { type: String, default: '0' },
});
</script>

<style scoped lang="scss">
.skeleton {
    position: absolute;
    background: #e2e2e2;
    border-radius: 4px;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
}
</style>
