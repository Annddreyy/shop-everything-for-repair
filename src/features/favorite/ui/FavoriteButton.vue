<template>
    <div :class="$style.button">
        <img :src="likeUnfill" alt="Добавить в избаранное" />
    </div>
</template>

<script setup lang="ts">
import likeUnfill from './../../../assets/images/product/like-unfill.svg';
</script>

<style lang="scss" module>
@use './../../../assets/scss/variables' as *;
.button {
    width: 40px;
    height: 40px;
    display: flex;
    border: 1px solid #f3f4f5;
    padding: $base-padding-3;
    border-radius: $base-border-radius;
}
</style>
