<template>
    <section class="bottom-block">
        <span>
            © 2003-2023 Интернет-магазин ООО «Стройоптторг» р/с
            40702810360000102415 в Ставропольское отделение №5230 ПАО Сбербанк,
            БИК 040702615
        </span>
        <img src="./assets/readycode-logo.svg" alt="ready code" />
        <span>Политика конфиденциальности</span>
    </section>
</template>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.bottom-block {
    @extend .grid-3;

    padding: 20px 0;

    * {
        justify-self: center;
        align-self: center;

        font-size: 14px;
        color: #444648;
    }
}
</style>
