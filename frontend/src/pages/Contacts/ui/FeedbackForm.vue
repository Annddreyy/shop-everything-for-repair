<template>
    <section class="feedback-form">
        <h2 class="feedback-form__title">
            У вас есть вопросы? С радостью ответим на них!
        </h2>
        <form class="feedback-form__form">
            <FormGroupComponent
                label="Ваше имя"
                required
                type="text"
                id="name"
                name="name"
                placeholder="Введите ваше имя"
                class="feedback-form__name"
            />
            <FormGroupComponent
                label="Номер телефона"
                required
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7 (  )  -  -"
                class="feedback-form__phone"
            />
            <FormGroupComponent
                label="Текст сообщения"
                required
                type="textarea"
                id="message"
                name="message"
                placeholder="Введите ваш вопрос"
                class="feedback-form__message"
            />
            <ButtonComponent
                class="feedback-form__button"
                text="Отправить"
                :bg-color="Colors.BLUE"
                :text-color="Colors.WHITE"
            />
            <Checkbox
                id="checkbox"
                name="checkbox"
                label="Согласен с обработкой персональных данных в соответствии сполитой конфиденциальности"
            />
        </form>
    </section>
</template>

<script setup lang="ts">
import ButtonComponent from '@/shared/ui/ButtonComponent/ButtonComponent.vue';
import Checkbox from '@/shared/ui/Forms/CheckboxField.vue';
import FormGroupComponent from '@/shared/ui/Forms/FormGroupComponent.vue';
import { Colors } from '@/shared/ui/ButtonComponent/types';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

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
        text-align: center;
        padding: 24px 27px;
        border-radius: 8px;
        cursor: pointer;
    }
}
</style>
