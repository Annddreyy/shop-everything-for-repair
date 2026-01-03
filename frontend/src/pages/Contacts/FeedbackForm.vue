<template>
    <section class="feedback-form">
        <h2 class="feedback-form__title">
            У вас есть вопросы? С радостью ответим на них!
        </h2>
        <form class="feedback-form__form">
            <FormGroup
                class="feedback-form__name"
                id="name"
                name="name"
                type="text"
                label="Ваше имя"
                required
                placeholder="Введите ваше имя"
            />
            <FormGroup
                type="tel"
                class="feedback-form__phone"
                id="phone"
                name="phone"
                label="Номер телефона"
                required
                placeholder="+7 (  )  -  -"
            />
            <FormGroup
                class="feedback-form__message"
                id="message"
                name="message"
                type="textarea"
                label="Текст сообщения"
                required
                placeholder="Введите ваш вопрос"
            />
            <BaseButton
                class="feedback-form__button"
                text="Отправить"
                :bg-color="Colors.BLUE"
                :text-color="Colors.WHITE"
            />
            <CheckboxField
                id="checkbox"
                name="checkbox"
                label="Согласен с обработкой персональных данных в соответствии сполитой конфиденциальности"
            />
        </form>
    </section>
</template>

<script setup lang="ts">
import { Colors, BaseButton, CheckboxField, FormGroup } from '@/shared/ui';
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.feedback-form {
    @extend .column-a-c;

    background-color: #f9fafb;
    margin: 0 auto;

    &__title {
        font-size: 33px;
        font-weight: 500;
        padding-top: 60px;
        margin-bottom: 53px;
    }

    &__form {
        @extend .grid;
        grid-template-areas:
            'name phone'
            'message message'
            'button checkbox';
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 30px;
        align-items: center;

        width: 736px;
        padding-bottom: 60px;
    }

    &__name {
        grid-area: name;
    }

    &__phone {
        grid-area: phone;
    }

    &__message {
        grid-area: message;
    }

    &__button {
        grid-area: button;
    }

    &__checkbox {
        @extend .row;
        gap: 10px;

        grid-area: checkbox;

        label {
            font-size: 13px;
            color: #696d70;
        }
    }

    &__button {
        width: 209px;
        padding: 24px 27px;

        border-radius: 8px;

        text-align: center;

        cursor: pointer;
    }
}
</style>
