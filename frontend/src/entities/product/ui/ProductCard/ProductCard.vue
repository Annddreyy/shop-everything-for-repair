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
                    class="product-card__img"
                    :src="mainImg"
                    @load="onLoad"
                    @error="onLoadError"
                />
                <span class="product-card__article">
                    Артикул: {{ article }}
                </span>
                <h4 class="product-card__title">{{ title }}</h4>
                <div class="product-card__prices">
                    <span
                        v-if="promotionPercent"
                        class="product-card__old-price"
                    >
                        {{ oldPrice }} ₽
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
                <CartButton
                    :isBinProduct="isBinProduct"
                    @click="
                        (event: Event) => toggleLSItem(event, LSItemTypes.BIN)
                    "
                />
                <div class="buttons__right">
                    <FavoriteButton
                        :isFavoriteProduct="isFavoriteProduct"
                        @click="
                            (event: Event) =>
                                toggleLSItem(event, LSItemTypes.FAVORITE)
                        "
                    />
                    <CompareButton
                        :isCompareProduct="isCompareProduct"
                        @click="
                            (event: Event) =>
                                toggleLSItem(event, LSItemTypes.COMPARE)
                        "
                    />
                </div>
            </div>
        </article>
    </RouterLink>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { onLoadError } from '@/shared/libs/ui';
import type { Product } from '@/entities/product';
import {
    checkItemExistsInLS,
    LSItemTypes,
    toggleItemInLS,
} from '@/shared/libs/localStorage';

import CartButton from './CartButton/CartButton.vue';
import CompareButton from './CompareButton/CompareButton.vue';
import FavoriteButton from './FavoriteButton/FavoriteButton.vue';

const props = defineProps<Product>();

const imgIsLoading = ref(true);

const oldPrice = computed(() =>
    Math.round(props.price * (1 + (props.promotionPercent || 0) / 100)),
);

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

const toggleLSItem = (_event: Event, itemType: LSItemTypes) => {
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
        setInLsStatus(itemType, false);
    } else {
        toggleItemInLS({
            method: 'add',
            key: itemType,
            item: props,
        });
        setInLsStatus(itemType, true);
    }
};

const setInLsStatus = (itemType: LSItemTypes, status: boolean) => {
    switch (itemType) {
        case LSItemTypes.BIN:
            isBinProduct.value = status;
            break;
        case LSItemTypes.COMPARE:
            isCompareProduct.value = status;
            break;
        case LSItemTypes.FAVORITE:
            isFavoriteProduct.value = status;
            break;
    }
};
</script>

<style scoped lang="scss">
@use '@/app/styles/display' as *;
@use 'sass:map';

.product-card {
    @extend .column;
    justify-content: space-between;
    gap: 10px;

    position: relative;
    width: 308px;

    &__statuses {
        @extend .column;

        position: absolute;
        left: -24px;
        top: -22px;

        padding: 24px;
    }

    &__status {
        width: max-content;
        padding: 6px 8px;

        font-size: 13px;
        line-height: 19px;

        border: 1px solid var(--black);
        border-radius: 5px;

        background-color: var(--white);

        &[data-status='хит'],
        &[data-status='bestseller'] {
            color: var(--orange);
            border-color: var(--orange);
        }

        &[data-status='новинка'],
        &[data-status='new'] {
            color: var(--green);
            border-color: var(--green);
        }

        &[data-status='распродажа'],
        &[data-status='popular'] {
            color: var(--error);
            border-color: var(--error);
        }
    }

    &__img {
        width: 278px;
        height: 202px;

        margin: 15px;

        object-fit: cover;
    }

    &__article {
        font-size: 13px;
        color: var(--gray);
    }

    &__title {
        margin-top: 14px;

        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
    }

    &__prices {
        @extend .row-a-c;
        gap: 10px;
    }

    &__old-price {
        font-size: 15px;
        font-weight: 400;
        line-height: 22px;
        text-decoration: line-through;
        color: var(--gray);
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
