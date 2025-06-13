<template>
    <div :class="$style.button">
        <img :src="img" alt="Добавить в корзину" />
        <span>Купить</span>
    </div>
</template>

<script setup lang="ts">
import img from './../../../assets/images/product/bin-icon.svg';
</script>

<style module lang="scss">
@use './../../../assets/scss/variables' as *;
.button {
    width: max-content;
    height: 40px;

    display: flex;
    align-items: center;
    gap: $base-gap-3;

    padding: 7px 17px;
    border-radius: $base-border-radius-2;

    background-color: #186fd4;

    span {
        font-family: Helvetica-bold;
        font-size: var(--fz-medium);
        color: var(--white);
    }
}
</style>
