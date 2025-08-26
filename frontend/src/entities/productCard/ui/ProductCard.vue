<template>
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
            <img :src="img" class="product-card__img" />
            <span class="product-card__article">{{ article }}</span>
            <h3 class="product-card__title">{{ title }}</h3>
            <div class="product-card__prices">
                <span v-if="promotionPercent" class="product-card__old-price">
                    {{ Math.round(price * (1 + promotionPercent / 100)) }}₽
                </span>
                <span class="product-card__price">{{ price }} ₽</span>
                <span v-if="promotionPercent" class="product-card__promotion">
                    -{{ promotionPercent }}%
                </span>
            </div>
        </div>
        <div class="buttons">
            <AddToCartButton />
            <div class="buttons__right">
                <FavoriteButton />
                <CompareButton />
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import AddToCartButton from '@/features/cart/ui/AddToCartButton.vue';
import CompareButton from '@/features/compare/ui/CompareButton.vue';
import FavoriteButton from '@/features/favorite/ui/FavoriteButton.vue';
import type { ProductCard } from '../types';

defineProps<ProductCard>();
</script>

<style module lang="scss">
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
        left: 0;
        top: 0;

        padding: $base-padding-2;
    }

    &__status {
        width: max-content;
        padding: 5px 8px;

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
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    &__article {
        font-size: var(--fz-small);
        color: var(--gray);
    }

    &__title {
        font-size: var(--fz-large);
        font-weight: 550;
    }

    &__prices {
        @extend .row-a-c;
        gap: $base-gap-2;
    }

    &__old-price {
        color: var(--gray);
        text-decoration: line-through;
        font-weight: 400;
        font-size: var(--fz-small);
    }

    &__price {
        font-size: 20px;
        color: var(--dark-blue);
        font-weight: 550;
    }

    &__promotion {
        padding: $base-padding;
        border-radius: $base-border-radius;
        background-color: var(--green);
        color: var(--white);
        font-size: 11px;
        font-weight: bold;
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
