<template>
    <div class="container">
        <section class="block-404">
            <img
                src="./../../../assets/images/404/404.svg"
                alt="404"
                class="block-404__img"
            />
            <p class="block-404__text">
                Запрашиваемая страница не найдена. Возможно она была удалена,
                либо её адрес был изменен. Попробуйте воспользоваться поиском.
            </p>
            <div class="block-404__buttons">
                <ButtonComponent
                    text="Вернуться назад"
                    :bg-color="Colors.GRAY"
                    :text-color="Colors.LIGHT_BLUE"
                    class="block-404__button"
                />
                <ButtonComponent
                    text="На главную"
                    :bg-color="Colors.BLUE"
                    :text-color="Colors.WHITE"
                    class="block-404__button"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/shared/ui/ButtonComponent/ButtonComponent.vue';
import { Colors } from '@/shared/ui/ButtonComponent/types';

</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

.block-404 {
    @extend .column-a-c;
    margin: 0 auto;
    gap: 55px;

    width: 727px;

    margin-top: 106px;
    margin-bottom: 110px;

    &__text {
        font-size: 18px;
        color: #535557;
        text-align: center;
    }

    &__buttons {
        @extend .row;
        gap: 15px;
    }

    &__button {
        width: 219px;
        padding: 25px 32px;

        border-radius: 8px;

        font-size: 13px;
        font-weight: 700;
        text-align: center;
    }
}
</style>
