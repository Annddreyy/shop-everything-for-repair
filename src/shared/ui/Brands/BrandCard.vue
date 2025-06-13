<template>
    <article :class="$style.brand">
        <img :src="card.img" alt="">
    </article>
</template>

<script setup lang="ts">
import type { Brand } from '@/shared/config/brands/brands';

const { card } = defineProps<{ card: Brand }>();
</script>

<style lang="scss" module>
@use './../../../assets/scss/display' as *;

.brand {
    @extend .row-a-c;
    @extend .row-j-c;
    
    width: 215px;
    height: 80px;
    padding: 10px;
    background-color: #F2F4F5;
}
</style>
