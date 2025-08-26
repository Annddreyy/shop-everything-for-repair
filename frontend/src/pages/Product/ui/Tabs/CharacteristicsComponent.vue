<template>
    <div class="characteristics-tab">
        <h2 class="title">Характеристики товара "{{ productStore.title }}"</h2>
        <div class="characteristics">
            <div
                v-for="characteristic in productStore.characteristics"
                :key="characteristic.title"
                class="characteristic"
            >
                <span class="characteristic__title">{{
                    characteristic.title
                }}</span>
                <div class="characteristic__border"></div>
                <span class="characteristic__value">{{
                    characteristic.value
                }}</span>
            </div>
        </div>
        <p class="description">
            Производитель оставляет за собой право без уведомления продавца
            менять характеристики, внешний вид, комплектацию товара и место его
            производства. Указанная информация не является публичной офертой.
        </p>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/entities/product/model/productCardsStore';

const productStore = useProductStore();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

.characteristics-tab {
    .title {
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;

        margin-top: 30px;
        margin-bottom: 25px;
    }

    .characteristics {
        @extend .grid-2;
        gap: 97px;
        row-gap: 11px;

        width: 100%;

        .characteristic {
            @extend .row;
            gap: 10px;

            * {
                font-size: 15px;
                line-height: 28px;
            }

            &__border {
                border-bottom: 1px dashed #d1d1d1;
                margin-bottom: 15px;
                flex-grow: 1;
            }

            &__value {
                color: #7d7f83;
            }
        }
    }

    .description {
        margin-top: 40px;
    }
}
</style>
