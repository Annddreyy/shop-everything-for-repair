<template>
    <section class="buy">
        <span class="buy__article">Артикул: {{ article || 'Не указан' }}</span>
        <span class="buy__in-stock">
            <template v-if="count">
                <img src="./assets/green-arrow.svg" />
                <span>В наличии: {{ count }}</span>
            </template>
            <template v-else>
                <img src="./assets/errow.svg" />
                <span>Нет в наличии</span>
            </template>
        </span>
        <div class="buy__price-block">
            <span class="buy__price">{{ price }} ₽</span>
            <span v-if="promotionPercent" class="buy__price-without-promotion">
                {{ priceWithoutPromotion }} ₽
            </span>
            <span v-if="promotionPercent" class="buy__promotion">
                -{{ promotionPercent }}%
            </span>
        </div>
        <div class="buy__count-block">
            <span class="buy__count-label">Количество:</span>
            <div class="buy__buttons">
                <button>-</button>
                <span class="buy__count-to-buy">{{ countToBuy }}</span>
                <button>+</button>
            </div>
        </div>
        <BaseButton
            class="buy__button"
            text="Добавить в корзину"
            :text-color="Colors.WHITE"
            :bg-color="Colors.BLUE"
        />
        <BaseButton
            class="buy__button"
            text="Купить в 1 клик"
            :text-color="Colors.BLUE"
            :bg-color="Colors.GRAY"
        />

        <div class="buy__action-buttons">
            <div class="buy__action-button">
                <button>
                    <img src="./assets/like-icon.svg" />
                </button>
                <span>В избранное</span>
            </div>
            <div class="buy__action-button">
                <button>
                    <img src="./assets/compare-icon.svg" />
                </button>
                <span>Сравнить</span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { BaseButton, Colors } from '@/shared/ui';

const { price, promotionPercent } = defineProps<{
    article: string;
    price: number;
    promotionPercent?: number;
    count: number;
}>();

const countToBuy = ref(1);

const priceWithoutPromotion = computed(
    () => price * (1 - (promotionPercent || 0) / 100),
);
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.buy {
    @extend .column;
    gap: 15px;

    width: 390px;
    height: max-content;

    padding: 25px;

    border-radius: 6px;

    background-color: white;
    box-shadow: 0 4px 19px #171b2012;

    &__article {
        font-size: 14px;
        color: #787c80;
    }

    &__in-stock {
        @extend .row-a-c;
        gap: 7px;

        font-size: 13px;
        color: #3b4048;

        img {
            width: 9px;
            height: 6px;
        }
    }

    &__action-buttons {
        @extend .row-a-c;
        justify-content: space-between;
    }

    &__action-button {
        @extend .row-a-c;

        button {
            @extend .row-c;
            width: 40px;
            height: 40px;

            border: 1px solid #f3f4f5;
            background-color: transparent;
        }
    }

    &__price-block {
        @extend .row-a-s;
        gap: 7px;
    }

    &__price {
        font-size: 30px;
        color: #003b73;
    }

    &__promotion {
        padding: 7px 3px;

        background-color: #1b9665;
        border-radius: 4px;

        font-size: 11px;
        font-weight: bold;
        line-height: 11px;
        color: white;
    }

    &__price-without-promotion {
        font-size: 17px;
        color: #8f9296;
        text-decoration: line-through;
    }

    &__count-block {
        @extend .row-a-c;
        gap: 25px;

        button {
            width: 60px;
            padding: 10px;

            border-radius: 900px;
        }
    }

    &__count-label {
        font-size: 15px;
    }

    &__buttons {
        @extend .row-a-c;
        gap: 28px;
    }

    &__button {
        width: 100%;
        padding: 24px;

        border-radius: 8px;

        &:last-of-type {
            padding: 17px;
        }
    }
}
</style>
