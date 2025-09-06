<script setup lang="ts">
import { ButtonComponent } from '@/shared/ui';
import { Colors } from '@/shared/ui/ButtonComponent/types';
</script>

<template>
    <section class="mailing-list-form">
        <h4 class="mailing-list-form__title">Подпишитесь на рассылку</h4>
        <p class="mailing-list-form__description">
            Регулярные скидки и спецпредложенения, а так же новости компании.
        </p>
        <input
            type="text"
            placeholder="Email"
            class="mailing-list-form__email"
        />
        <ButtonComponent
            text="Подписаться"
            :bg-color="Colors.BLUE"
            :text-color="Colors.WHITE"
        />
        <div class="mainling-list-form__bottom">
            <Checkbox></Checkbox>
            <label>
                Согласен с обработкой персональных данных в соответствии с
                политикой конфиденциальности
            </label>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

.mailing-list-form {
    @extend .column;
    gap: 13px;

    padding: 30px 25px;
    background-color: #f9fafb;

    border-radius: 8px;

    &__title {
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        color: #1d1d27;
    }

    &__description {
        text-align: center;
        font-size: 14px;
        color: #6a6f75;
    }

    &__email {
        padding: 25px 20px;
        border: 1px solid #ebeef0;
        box-shadow: 0 1px 2px #00000012 inset;
        font-size: 15px;

        &::placeholder {
            color: #adb1b7;
        }
    }
}
</style>
