<script setup lang="ts">
import ButtonComponent from '@/shared/ui/ButtonComponent/ButtonComponent.vue';
import { Colors } from '@/shared/ui/ButtonComponent/types';

</script>

<template>
    <section class="feedback-form">
        <h2 class="feedback-form__title">У вас есть вопросы? С радостью ответим на них!</h2>
        <form class="feedback-form__form">
            <div class="feedback-form__form-group feedback-form__form-group--name">
                <label for="name">Ваше имя <span class="feedback-form__redstar">*</span>:</label>
                <input type="text" name="name" id="name" placeholder="Введите ваше имя">
            </div>
            <div class="feedback-form__form-group feedback-form__form-group--phone">
                <label for="phone">Номер телефона <span class="feedback-form__redstar">*</span>:</label>
                <input type="tel" name="phone" id="phone" inputmode="tel" placeholder="+7 (  )  -  -"/>
            </div>
            <div class="feedback-form__form-group feedback-form__form-group--message">
                <label for="message">Текст сообщения <span class="feedback-form__redstar">*</span>:</label>
                <textarea name="message" id="message" placeholder="Введите ваш вопрос" />
            </div>
            <div class="feedback-form__form-group feedback-form__form-group--button">
                <ButtonComponent class="feedback-form__button" text="Отправить" :bg-color="Colors.BLUE" :text-color="Colors.WHITE" />
            </div>
            <div class="feedback-form__form-group feedback-form__form-group--checkbox">
                <Checkbox></Checkbox>
                <label>
                    Согласен с обработкой персональных данных в соответствии с политой
                    конфиденциальности
                </label>
            </div>
        </form>
    </section>
</template>

<style lang="scss" scoped>
@use './../../../../assets/scss/display' as *;

.feedback-form {
    @extend .column-a-c;

    background-color: #F9FAFB;
    margin: 0 auto;

    &__title {
        font-size: 33px;
        font-weight: 700;
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

        padding-bottom: 60px;
    }

    &__form-group {
        @extend .column;
        gap: 10px;

        label {
            font-size: 14px;
        }

        input, textarea {
            padding: 25px 20px;
            border: 1px solid #EBEEF0;
            border-radius: 7px;

            box-shadow: 0 1px 2px #00000012 inset;

            font-size: 15px;
        }

        textarea {
            resize: vertical;
            min-height: 89px;
        }

        &--name {
            grid-area: name;
        }

        &--phone {
            grid-area: phone;
        }

        &--message {
            grid-area: message;
        }

        &--button {
            grid-area: button;
        }

        &--checkbox {
            @extend .row;
            gap: 10px;
            grid-area: checkbox;

            label {
                font-size: 13px;
                color: #696D70;
            }
        }
    }

    &__redstar {
        color: #E52B0E;
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
