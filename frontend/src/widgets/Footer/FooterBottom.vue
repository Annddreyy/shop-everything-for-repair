<template>
    <section class="bottom-block">
        <span>
            © 2003-2023 Интернет-магазин ООО «Стройоптторг» р/с
            40702810360000102415 в Ставропольское отделение №5230 ПАО Сбербанк,
            БИК 040702615
        </span>
        <img :src="readyCodeIcon" alt="ready code" />
        <span>Политика конфиденциальности</span>
    </section>
</template>

<script setup lang="ts">
import { readyCodeIcon } from '@/assets/images';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;

.bottom-block {
    @extend .grid-3;

    padding: $base-padding-9 0;

    * {
        font-size: 14px;
        color: #444648;
        justify-self: center;
        align-self: center;
    }
}
</style>
