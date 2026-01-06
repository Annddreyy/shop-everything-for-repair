<template>
    <section class="mailing-list-form">
        <h4 class="mailing-list-form__title">Подпишитесь на рассылку</h4>
        <p class="mailing-list-form__description">
            Регулярные скидки и спецпредложенения, а так же новости компании.
        </p>
        <InputField
            class="email-input"
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
        <div class="mailing-list-form__bottom">
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
        font-size: 14px;
        text-align: center;
        line-height: 19px;
        color: #6a6f75;
    }

    &__subscribe-button {
        padding: 17px 27px;
        border-radius: 8px;
        text-transform: uppercase;

        margin-top: -2px;

        * {
            font-size: 13px;

        }
    }

    :deep(input) {
        padding-block: 23px;
        font-size: 11px;
    }

    :deep(.checkbox) {
        margin-top: 17px;
    }

    :deep(.checkbox__label) {
        font-size: 13px;
        color: #696D70;
    }

    @media (max-width: 1250px) {
        display: grid;
        grid-template-areas: 'title title'
                            'description description'
                            'email button'
                            'checkbox checkbox';
        &__title {
            grid-area: title;
        }

        &__description {
            grid-area: description;
        }

        &__email-input {
            grid-area: email;
        }

        &__subscribe-button {
            grid-area: button;
        }

        &__bottom {
            grid-area: checkbox;
        }
    }

    @media (max-width: 600px) {
        display: flex;
    }
}
</style>
