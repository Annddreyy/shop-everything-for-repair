<template>
    <RouterLink :to="`/product/${id}`">
        <article class="product-card">
            <div class="product-card__statuses">
                <span
                    class="product-card__status"
                    :data-status="status"
                    v-for="status in statuses"
                    :key="status"
                >
                    {{ status }}
                </span>
            </div>
            <div class="product-card__top">
                <Skeleton
                    v-if="imgIsLoading"
                    width="278px"
                    height="202px"
                    top="15px"
                    left="15px"
                />
                <img
                    :src="img"
                    class="product-card__img"
                    @load="onLoad"
                    @error="onLoadError"
                />
                <span class="product-card__article"
                    >Артикул: {{ article }}</span
                >
                <h4 class="product-card__title">{{ title }}</h4>
                <div class="product-card__prices">
                    <span
                        v-if="promotionPercent"
                        class="product-card__old-price"
                    >
                        {{ Math.round(price * (1 + promotionPercent / 100)) }} ₽
                    </span>
                    <span class="product-card__price">{{ price }} ₽</span>
                    <span
                        v-if="promotionPercent"
                        class="product-card__promotion"
                    >
                        -{{ promotionPercent }}%
                    </span>
                </div>
            </div>
            <div class="buttons">
                <AddToCartButton
                    @click="
                        (event: Event) => toggleLSItem(event, LSItemTypes.BIN)
                    "
                    :isBinProduct="isBinProduct"
                />
                <div class="buttons__right">
                    <FavoriteButton
                        @click="
                            (event: Event) =>
                                toggleLSItem(event, LSItemTypes.FAVORITE)
                        "
                        :isFavoriteProduct="isFavoriteProduct"
                    />
                    <CompareButton
                        @click="
                            (event: Event) =>
                                toggleLSItem(event, LSItemTypes.COMPARE)
                        "
                        :isCompareProduct="isCompareProduct"
                    />
                </div>
            </div>
        </article>
    </RouterLink>
</template>

<script setup lang="ts">
import AddToCartButton from '@/features/add-to-cart/ui/AddToCartButton.vue';
import CompareButton from '@/features/add-to-compare/ui/CompareButton.vue';
import FavoriteButton from '@/features/add-to-favorite/ui/FavoriteButton.vue';
import { onLoadError } from '@/shared/lib';
import {
    checkItemExistsInLS,
    LSItemTypes,
    toggleItemInLS,
} from '@/shared/lib/workingWithLS';
import Skeleton from '@/shared/ui/Skeleton/Skeleton.vue';
import { ref } from 'vue';
import type { ProductCard } from '../types';

const props = defineProps<ProductCard>();

const imgIsLoading = ref(true);

const isFavoriteProduct = ref(
    checkItemExistsInLS({ item: props, key: LSItemTypes.FAVORITE, id: 'id' }),
);

const isCompareProduct = ref(
    checkItemExistsInLS({ item: props, key: LSItemTypes.COMPARE, id: 'id' }),
);

const isBinProduct = ref(
    checkItemExistsInLS({ item: props, key: LSItemTypes.BIN, id: 'id' }),
);

const onLoad = () => {
    imgIsLoading.value = false;
};

const toggleLSItem = (event: Event, itemType: LSItemTypes) => {
    event.preventDefault();
    if (
        checkItemExistsInLS({
            item: props,
            key: itemType,
            id: 'id',
        })
    ) {
        toggleItemInLS({
            method: 'remove',
            key: itemType,
            id: 'id',
            value: props.id,
        });

        switch (itemType) {
            case LSItemTypes.BIN:
                isBinProduct.value = false;
                break;
            case LSItemTypes.COMPARE:
                isCompareProduct.value = false;
                break;
            case LSItemTypes.FAVORITE:
                isFavoriteProduct.value = false;
                break;
        }
    } else {
        toggleItemInLS({
            method: 'add',
            key: itemType,
            item: props,
        });

        switch (itemType) {
            case LSItemTypes.BIN:
                isBinProduct.value = true;
                break;
            case LSItemTypes.COMPARE:
                isCompareProduct.value = true;
                break;
            case LSItemTypes.FAVORITE:
                isFavoriteProduct.value = true;
                break;
        }
    }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;
@use 'sass:map';

.product-card {
    @extend .column;
    justify-content: space-between;
    gap: $base-gap-2;

    position: relative;
    width: 308px;

    &__statuses {
        @extend .column;

        position: absolute;
        left: -24px;
        top: -22px;

        padding: $base-padding-6;
    }

    &__status {
        width: max-content;
        padding: 6px 8px;

        font-size: 13px;
        line-height: 19px;

        border: 1px solid var(--black);
        border-radius: $base-border-radius;

        background-color: var(--white);

        &[data-status='хит'] {
            color: var(--orange);
            border-color: var(--orange);
        }

        &[data-status='новинка'] {
            color: var(--green);
            border-color: var(--green);
        }

        &[data-status='распродажа'] {
            color: var(--error);
            border-color: var(--error);
        }
    }

    &__img {
        margin: 15px;
        width: 278px;
        height: 202px;
        object-fit: cover;
    }

    &__article {
        font-size: 13px;
        color: var(--gray);
    }

    &__title {
        font-size: 18px;
        line-height: 26px;
        margin-top: 14px;
        font-weight: 400;
    }

    &__prices {
        @extend .row-a-c;
        gap: $base-gap-2;
    }

    &__old-price {
        color: var(--gray);
        text-decoration: line-through;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
    }

    &__price {
        font-size: 20px;
        color: var(--dark-blue);
        font-weight: 400;
    }

    &__promotion {
        padding: 8px 5px;
        border-radius: 4px;
        background-color: var(--green);
        color: #ffffff;
        font-size: 10px;
        line-height: 11px;
        font-weight: 700px;
    }

    .buttons {
        display: flex;
        justify-content: space-between;

        &__right {
            @extend .row;
        }
    }
}
</style>
