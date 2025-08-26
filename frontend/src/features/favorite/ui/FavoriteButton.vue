<template>
    <div class="like-button">
        <img :src="likeIcon" alt="Добавить в избаранное" />
    </div>
</template>

<script setup lang="ts">
import { likeIcon } from '@/assets/images';
</script>

<style lang="scss" module>
@use '@/assets/scss/variables' as *;
.like-button {
    width: 40px;
    height: 40px;
    display: flex;
    border: 1px solid #f3f4f5;
    padding: $base-padding-3;
    border-radius: $base-border-radius;
}
</style>
