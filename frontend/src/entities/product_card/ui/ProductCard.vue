<template>
    <arcticle :class="$style.card">
        <div :class="$style.statuses">
            <span
                :class="$style.status"
                :data-status="status"
                v-for="status in card.statuses"
                :key="status"
            >
                {{ status }}
            </span>
        </div>
        <div :class="$style.top">
            <img :src="card.img" :class="$style.img" />
            <span :class="$style.article">{{ card.article }}</span>
            <h3 :class="$style.title">{{ card.title }}</h3>
            <div :class="$style.prices">
                <span v-if="card.promotionPercent" :class="$style.oldPrice"
                    >{{
                        Math.round(card.price * (1 + card.promotionPercent / 100))
                    }}
                    ₽</span
                >
                <span :class="$style.price">{{ card.price }} ₽</span>
                <span v-if="card.promotionPercent" :class="$style.promotion"
                    >-{{ card.promotionPercent }}%</span
                >
            </div>
        </div>
        <div :class="$style.bottomButtons">
            <AddToCartButton />
            <div :class="$style.rightButtons">
                <FavoriteButton />
                <CompareButton />
            </div>
        </div>
    </arcticle>
</template>

<script setup lang="ts">
import AddToCartButton from '@/features/cart/ui/AddToCartButton.vue';
import CompareButton from '@/features/compare/ui/CompareButton.vue';
import FavoriteButton from '@/features/favorite/ui/FavoriteButton.vue';
import type { ProductCard } from '../types/product';

const { card } = defineProps<{ card: ProductCard }>();
</script>

<style module lang="scss">
@use './../../../assets/scss/variables' as *;
@use './../../../assets/scss/display' as *;
@use 'sass:map';

.card {
    @extend .column;
    justify-content: space-between;
    gap: $base-gap-2;

    position: relative;
    width: 308px;

    .statuses {
        position: absolute;
        left: 0;
        top: 0;

        @extend .column;

        padding: $base-padding-2;

        .status {
            border: 1px solid var(--black);
            background-color: var(--white);
            width: max-content;
            border-radius: $base-border-radius;
            padding: 5px 8px;
        }

        .status[data-status='хит'] {
            color: var(--orange);
            border-color: var(--orange);
        }

        .status[data-status='новинка'] {
            color: var(--green);
            border-color: var(--green);
        }

        .status[data-status='распродажа'] {
            color: var(--error);
            border-color: var(--error);
        }
    }

    .top {
        .img {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
        .article {
            font-size: var(--fz-small);
            color: var(--gray);
        }

        .title {
            font-size: var(--fz-large);
            font-weight: 550;
        }

        .prices {
            @extend .row-a-c;
            gap: $base-gap-2;

            .oldPrice {
                color: var(--gray);
                text-decoration: line-through;
                font-weight: 400;
                font-size: var(--fz-small);
            }

            .price {
                font-size: 20px;
                color: var(--dark-blue);
                font-weight: 550;
            }

            .promotion {
                padding: $base-padding;
                border-radius: $base-border-radius;
                background-color: var(--green);
                color: var(--white);
                font-size: 11px;
                font-weight: bold;
            }
        }
    }


    .bottomButtons {
        display: flex;
        justify-content: space-between;

        .rightButtons {
            @extend .row;
        }
    }
}
</style>
