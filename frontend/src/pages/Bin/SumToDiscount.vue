<template>
    <div class="sum-to-discount">
        <p class="sum-to-discount__discount-price">
            Ваша скидка от суммы заказа: <strong>{{ discountPrice }} ₽</strong>
        </p>
        <div class="sum-to-discount__progress-bar">
            <div
                class="background"
                :style="{
                    width: `${isMaxDiscount ? 100 : (currentSum / nextTargetSum) * 100}%`,
                }"
            ></div>
        </div>
        <div class="sum-to-discount__sum">
            <span class="sum-to-discount__current-sum">{{ currentSum }} ₽</span>
            <span class="sum-to-discount__next-target-sum">
                {{
                    isMaxDiscount
                        ? 'Вы достигли максимальной скидки!'
                        : `${nextTargetSum} ₽`
                }}
            </span>
        </div>
        <div class="sum-to-discount__bottom">
            <div v-if="!isMaxDiscount" class="sum-to-discount__information">
                Добавьте в корзину товаров на
                <strong class="sum-to-discount__sum-for-up-discount">
                    {{ addSumForUpDiscount }} ₽
                </strong>
                и получите скидку
                <strong class="sum-to-discount__next-discount-percent">
                    {{ nextDiscountPercent }}%
                </strong>
            </div>
            <button
                class="sum-to-discount__prompt"
                @mouseenter="promptIsHovered = true"
                @mouseleave="promptIsHovered = false"
            >
                Информация о скидках от суммы корзины
                <div
                    v-if="promptIsHovered"
                    class="sum-to-discount__prompt-block"
                >
                    <strong>Сейчас у нас действуют следующие пороги:</strong>
                    <div class="discounts">
                        <span
                            v-for="[price, discountPercent] in Object.entries(
                                discounts,
                            )"
                            class="discount"
                        >
                            от <em class="discount__price">{{ price }}₽</em> -
                            <em class="discount__percent">
                                -{{ discountPercent }}%
                            </em>
                        </span>
                    </div>
                </div>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const { discountPercent, currentSum, discounts } = defineProps<{
    discounts: Record<number, number>;
    discountPercent: number;
    currentSum: number;
}>();

const promptIsHovered = ref(false);

const discountPrice = computed(() => +(currentSum * (discountPercent / 100)).toFixed(2));

const nextTargetSum = computed(() => {
    for (let [price] of Object.entries(discounts)) {
        if (currentSum < +price) {
            return +price;
        }
    }
    return Infinity;
});

const nextDiscountPercent = computed(() => {
    for (let [price, discount] of Object.entries(discounts)) {
        if (currentSum < +price) {
            return discount;
        }
    }
    return Infinity;
});

const addSumForUpDiscount = computed(() => nextTargetSum.value - currentSum);

const isMaxDiscount = computed(
    () =>
        currentSum >
        Object.keys(discounts)
            .map((key) => +key)
            .sort((a, b) => a - b)
            .at(-1)!,
);
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.sum-to-discount {
    border: 1px solid #edf0f2;
    border-radius: 8px;

    padding: 15px 25px;

    &__discount-price {
        font-size: 15px;
        font-weight: bold;

        strong {
            color: #003b73;
        }
    }

    &__progress-bar {
        position: relative;

        width: 100%;
        height: 7px;

        margin-top: 10px;
        margin-bottom: 5px;

        background-color: #f3f4f5;
        border-radius: 8px;

        .background {
            width: 100%;
            height: 7px;

            background-image: repeating-linear-gradient(
                -45deg,
                #186fd4 0px,
                #186fd4 20px,
                #3481d9 20px,
                #3481d9 40px
            );

            border-radius: 8px;

            transition: width 1s ease-in-out;
        }
    }

    &__sum {
        @extend .row;
        justify-content: space-between;
    }

    &__current-sum {
        margin-left: 25px;

        font-size: 15px;
        color: #3d3d3d;
    }

    &__next-target-sum {
        font-size: 15px;
        color: #898989;
    }

    &__sum-for-up-discount {
        color: #003b73;
    }

    &__bottom {
        @extend .row-a-c;
        gap: 10px;

        margin-top: 10px;
    }

    &__information {
        font-size: 15px;
        color: #343a43;
    }

    &__prompt {
        position: relative;

        padding: 15px 17px;

        font-size: 15px;
        color: #117fe3;

        border-radius: 4px;
        background-color: #f6f8fb;
    }

    &__prompt-block {
        @extend .column;
        gap: 10px;

        width: max-content;

        position: absolute;
        top: -250%;
        left: -75px;

        padding: 25px;

        background-color: #ffffff;
        box-shadow: 0px 4px 30px 0px #00000017;

        border-radius: 6px;

        &::after {
            position: absolute;
            content: '';
            left: calc(50% - 10px);
            bottom: -10px;

            width: 20px;
            height: 20px;
            transform: rotate(45deg);

            background-color: white;
        }

        strong {
            font-size: 18px;
            color: #186fd4;
        }

        .discounts {
            @extend .row;
            justify-content: space-between;

            .discount {
                &:nth-child(1) .discount__percent {
                    background-color: #1b9665;
                }

                &:nth-child(2) .discount__percent {
                    background-color: #ff9900;
                }

                &:nth-child(3) .discount__percent {
                    background-color: #ee063e;
                }

                &__price {
                    font-weight: bold;
                    font-style: normal;
                    color: #2c333d;
                }

                &__percent {
                    padding: 8px 5px;

                    font-size: 11px;
                    font-style: normal;
                    color: white;

                    border-radius: 4px;
                }
            }
        }
    }

    &__next-discount-percent {
        font-weight: normal;
    }
}
</style>
