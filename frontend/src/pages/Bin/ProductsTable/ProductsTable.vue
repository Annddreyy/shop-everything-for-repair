<template>
    <table class="bin-products">
        <thead>
            <tr class="bin-products__header">
                <td>Товар</td>
                <td>Цена</td>
                <td>Количество</td>
                <td>Сумма</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in bin" class="bin-products__product">
                <td>
                    <div class="bin-products__main-info">
                        <img class="bin-products__img" :src="product.mainImg" />
                        <div class="bin-products__text">
                            <span class="bin-products__title">
                                {{ product.title }}
                            </span>
                            <span class="bin-products__article">
                                Артикул: {{ product.article }}
                            </span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="bin-products__price-block">
                        <span class="bin-products__price">
                            {{ product.price }} ₽
                        </span>
                        <span
                            v-if="product.promotionPercent"
                            class="bin-products__old-price"
                        >
                            {{
                                product.price *
                                (1 + product.promotionPercent / 100)
                            }}
                            ₽
                        </span>
                    </div>
                </td>
                <td>
                    <div class="bin-products__count-block">
                        <button
                            class="bin-products__decrease-button"
                            @click="decreaseProduct(product.id)"
                        >
                            -
                        </button>
                        <span class="bin-products__count">
                            {{ product.count || 1 }}
                        </span>
                        <button
                            class="bin-products__increase-button"
                            @click="increaseProduct(product.id)"
                        >
                            +
                        </button>
                    </div>
                </td>
                <td>
                    <div class="bin-products__last-cell">
                        <span class="bin-products__price">
                            {{ product.price * (product.count || 1) }} ₽
                        </span>
                        <button
                            class="bin-products__delete-button"
                            @click="
                                LSStore.removeItem(
                                    LSItemTypes.BIN,
                                    'id',
                                    product.id,
                                )
                            "
                        >
                            <img
                                src="./assets/delete-icon.svg"
                                alt="Убрать из корзины"
                            />
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { LSItemTypes } from '@/shared/model/useLS';
import { useLSStore } from '@/shared/model';

const LSStore = useLSStore();
const { bin } = storeToRefs(LSStore);

const decreaseProduct = (id: string) => {
    LSStore.decreaseItemCount(LSItemTypes.BIN, 'id', id);
};

const increaseProduct = (id: string) => {
    LSStore.increaseItemCount(LSItemTypes.BIN, 'id', id);
};
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.bin-products {
    margin-top: 40px;

    border: 1px solid #edf0f2;
    border-radius: 8px;

    width: 100%;
    border-collapse: collapse;

    &__header {
        td {
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            color: #45484a;

            border-bottom: 1px solid #edf0f2;
        }
    }

    &__count-block {
        @extend .row;
        gap: 13.5px;
        align-items: center;
    }

    &__price-block {
        @extend .column;
        gap: 0;
    }

    &__old-price {
        font-size: 15px;
        text-decoration: line-through;
        color: #8f9296;
    }

    &__decrease-button,
    &__increase-button {
        width: 61px;
        height: 43px;

        padding: 10px;
        border-radius: 50%;
    }

    &__main-info {
        @extend .row;
        gap: 15px;
    }

    &__text {
        @extend .column;
        gap: 5px;
    }

    &__title {
        color: #2c333d;
    }

    &__article {
        font-size: 13px;
        color: #a8adb2;
    }

    &__img {
        width: 90px;
        height: 90px;

        border-radius: 8px;
    }

    &__price {
        font-size: 20px;
        color: #003b73;
    }

    &__last-cell {
        @extend .row-a-c;
        justify-content: space-between;
    }

    &__delete-button {
        background-color: transparent;
    }

    td {
        padding: 20px 15px;
        vertical-align: middle;
    }
}
</style>
