<template>
    <img :src="companyLogo" alt="" class="logo" />
    <ButtonComponent
        text="Каталог"
        :icon="burgerButtonIcon"
        :bg-color="Colors['BLUE']"
        :text-color="Colors['WHITE']"
        class="catalog-button"
    />
    <div class="search">
        <input
            type="search"
            placeholder="Найти среди 50000 товаров. Например: Дрель Bosh"
        />
        <img :src="searchIcon" alt="" />
    </div>
    <div class="buttons">
        <RouterLink to="/promotions" class="buttons__button">
            <img :src="promotionsIcon" alt="" role="none" />
            <span>Все акции</span>
        </RouterLink>
        <RouterLink to="/auth" class="buttons__button">
            <img :src="accountIcon" alt="" role="none" />
            <span>Войти</span>
        </RouterLink>
        <RouterLink
            to="/compare"
            class="buttons__button buttons__button--compare"
        >
            <img :src="compareIcon" alt="" role="none" />
            <span>Сравнение</span>
            <span v-if="LSStore.compare.length" class="counter">
                {{ LSStore.compare.length }}
            </span>
        </RouterLink>
        <RouterLink
            to="/favorite"
            class="buttons__button buttons__button--like"
        >
            <img :src="likeIcon" alt="" role="none" />
            <span>Избранное</span>
            <span v-if="LSStore.favorite.length" class="counter">
                {{ LSStore.favorite.length }}
            </span>
        </RouterLink>
        <RouterLink to="/cart" class="buttons__button buttons__button--bin">
            <img :src="cartIcon" alt="" role="none" />
            <span>Корзина</span>
            <span v-if="LSStore.bin.length" class="counter">
                {{ LSStore.bin.length }}
            </span>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/shared/ui/ButtonComponent/ButtonComponent.vue';
import { Colors } from '@/shared/ui/ButtonComponent/types';

import {
    accountIcon,
    burgerButtonIcon,
    promotionsIcon,
    searchIcon,
} from './assets';
import { likeIcon, cartIcon, compareIcon } from '@/entities/product/assets';
import { companyLogo } from '@/shared/assets';
import { useLSStore } from '@/shared/stores';

const LSStore = useLSStore();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;
@use '@/assets/scss/variables' as *;

.logo {
    width: 215px;
    height: 54px;
}

.catalog-button {
    @extend .row-c;
    height: 52px;
    padding: 16px 29px;
    border-radius: 8px;

    span {
        font-size: 13px;

        &:first-of-type {
            height: 100px;
        }
    }

    img {
        height: 1ch;
    }
}

.search {
    @extend .row;
    flex: 1;
    gap: 0;

    height: 52px;
    padding: 3px;

    background-color: #186fd4;
    border-radius: $base-border-radius-2;

    input {
        width: 100%;
        border-radius: $base-border-radius-2;
        padding: 15px $base-padding-4;
        font-size: var(--fz-medium);
    }

    img {
        align-self: center;
        margin: 0 21px;
        width: 14px;
        height: 14px;
    }
}

.buttons {
    @extend .row;

    &__button {
        @extend .column-c;

        img {
            width: 33px;
            height: 25px;
        }

        span {
            color: #6b7076;
            font-size: var(--fz-medium);
        }

        &:not(:first-child) {
            margin-left: 27px;
        }

        &--like,
        &--compare,
        &--bin {
            position: relative;
            .counter {
                @extend .row-c;
                position: absolute;
                top: -5px;
                right: 13px;

                background-color: #e52b0e;
                color: white;

                width: 17px;
                height: 17px;

                border-radius: 50%;

                font-size: 10px;
            }
        }
    }
}
</style>
