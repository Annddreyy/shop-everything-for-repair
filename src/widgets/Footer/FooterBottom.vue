<template>
    <section :class="$style.bottomBlock">
        <span
            >© 2003-2023 Интернет-магазин ООО «Стройоптторг» р/с
            40702810360000102415 в Ставропольское отделение №5230 ПАО Сбербанк,
            БИК 040702615</span
        >
        <img :src="readyCodeLogo" alt="">
        <span>Политика конфиденциальности</span>
    </section>
</template>

<script setup lang="ts">
import readyCodeLogo from './../../assets/images/footer/readycode_logo.svg';
</script>

<style lang="scss" module>
@use './../../assets/scss/variables' as *;
@use './../../assets/scss/display' as *;

.bottomBlock {
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
