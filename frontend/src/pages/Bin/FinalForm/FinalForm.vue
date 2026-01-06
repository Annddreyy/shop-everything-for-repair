<template>
    <section class="final-form">
        <h3 class="final-form__title">Итого</h3>
        <div class="final-form__price-block">
            <span class="final-form__label">Скидка по промокоду</span>
            <span class="dotted-line"></span>
            <span class="final-form__price">
                {{ promocodeDiscountPrice }} ₽
            </span>
        </div>
        <div class="final-form__price-block">
            <span class="final-form__label">Скидка от суммы заказа</span>
            <span class="dotted-line"></span>
            <span class="final-form__price"> {{ discountPrice }} ₽ </span>
        </div>
        <div class="final-form__price-block">
            <span class="final-form__label">Сумма</span>
            <span class="dotted-line"></span>
            <span class="final-form__price"> {{ fullPrice }} ₽ </span>
        </div>
        <div class="final-form__form">
            <InputField
                id="promocode"
                name="promocode"
                type="text"
                placeholder="Промокод"
                ref="promocodeInput"
            />
            <BaseButton
                class="final-form__promocode-button"
                text="Применить промокод"
                :bg-color="Colors.GRAY"
                :text-color="Colors.BLUE"
                @callback="getDiscountByPromocode"
            />
            <BaseButton
                class="final-form__placing-an-order-button"
                text="Перейти к оформлению"
                :bg-color="Colors.BLUE"
                :text-color="Colors.WHITE"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue';
import { toast } from 'vue3-toastify';
import { BaseButton, InputField, Colors } from '@/shared/ui';
import { promocodesAPI } from './api/promocode';

const { fullSum, discountPercent } = defineProps<{
    fullSum: number;
    discountPercent: number;
}>();

const promocodeDiscountPercent = ref(0);

const promocodeInput = useTemplateRef('promocodeInput');

const promocodeDiscountPrice = computed(
    () => +(fullSum * (promocodeDiscountPercent.value / 100)).toFixed(2),
);
const discountPrice = computed(
    () => +(fullSum * (discountPercent / 100)).toFixed(2),
);
const fullPrice = computed(
    () =>
        +(
            fullSum *
            (1 - (promocodeDiscountPercent.value + discountPercent) / 100)
        ).toFixed(2),
);

const getDiscountByPromocode = async () => {
    const promocode = promocodeInput.value?.$el.value;
    const response = await promocodesAPI.getPromocodeDiscount(promocode);
    if (response.status === 'success') {
        promocodeDiscountPercent.value = response.data.discount;
    } else {
        promocodeDiscountPercent.value = 0;
        toast.error('Введный промокод не найден!');
    }
};
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.final-form {
    @extend .column;
    gap: 25px;

    width: 449px;

    height: max-content;
    padding: 25px;

    border-radius: 6px;
    box-shadow: 0px 4px 19px 0px #171b2012;

    &__title {
        font-size: 28px;
        color: #1d1d27;
    }

    &__price-block {
        @extend .row-a-c;
        gap: 15px;

        .dotted-line {
            flex-grow: 1;

            border-bottom: 1px dashed #d1d1d1;
        }
    }

    &__form {
        @extend .column;
        gap: 10px;
    }

    &__label {
        min-width: max-content;
        font-size: 15px;

        &:last-child {
            color: red;
        }
    }

    &__price {
        font-size: 18px;
        color: #4d6159;
    }

    &__promocode-button,
    &__placing-an-order-button {
        padding: 23.5px 32px;
        border-radius: 8px;
    }

    &__placing-an-order-button {
        margin-top: 15px;
        padding: 25px 32px;
    }
}
</style>
