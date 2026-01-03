<template>
    <section class="mailing-list-form">
        <h4 class="mailing-list-form__title">Подпишитесь на рассылку</h4>
        <p class="mailing-list-form__description">
            Регулярные скидки и спецпредложенения, а так же новости компании.
        </p>
        <InputField
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email"
        />
        <BaseButton
            class="mailing-list-form__subscribe-button"
            text="Подписаться"
            :bg-color="Colors.BLUE"
            :text-color="Colors.WHITE"
        />
        <div class="mainling-list-form__bottom">
            <CheckboxField
                id="personal-data"
                name="personal-data"
                required
                label="Согласен с обработкой персональных данных в соответствии с
                политикой конфиденциальности"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { BaseButton, CheckboxField, Colors, InputField } from '@/shared/ui';
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

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

    &__subscribe-button {
        padding: 21px 27px;
        border-radius: 8px;
    }

    :deep(.checkbox__label-text) {
        font-size: 13px;
        color: #696d70;
    }
}
</style>
