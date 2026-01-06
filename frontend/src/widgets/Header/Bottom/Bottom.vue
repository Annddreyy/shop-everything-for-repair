<template>
    <div class="container bottom-block">
        <RouterLink :to="{ name: 'main' }">
            <img :src="companyLogo" alt="Стройотпорг" class="logo" />
        </RouterLink>
        <BaseButton
            text="Каталог"
            :text-color="Colors.WHITE"
            :bg-color="Colors.BLUE"
            :icon="burgerButtonIcon"
            class="catalog-button"
        />
        <div class="search">
            <input
                type="search"
                placeholder="Найти среди 50000 товаров. Например: Дрель Bosh"
            />
            <img src="./assets/search-icon.svg" alt="Найти" />
        </div>
        <div class="buttons">
            <RouterLink to="/promotions" class="buttons__button">
                <img src="./assets/promotions-icon.svg" role="none" />
                <span>Все акции</span>
            </RouterLink>
            <RouterLink to="/auth" class="buttons__button">
                <img src="./assets/account-icon.svg" role="none" />
                <span>Войти</span>
            </RouterLink>
            <RouterLink
                to="/compare"
                class="buttons__button buttons__button--compare"
            >
                <img src="./assets/compare-icon.svg" alt="" />
                <span>Сравнение</span>
                <span v-if="LSStore.compare.length" class="counter">
                    {{ LSStore.compare.length }}
                </span>
            </RouterLink>
            <RouterLink
                to="/favorite"
                class="buttons__button buttons__button--like"
            >
                <img src="./assets/like-icon.svg" alt="" />
                <span>Избранное</span>
                <span v-if="LSStore.favorite.length" class="counter">
                    {{ LSStore.favorite.length }}
                </span>
            </RouterLink>
            <RouterLink to="/bin" class="buttons__button buttons__button--bin">
                <img src="./assets/cart-icon.svg" alt="" />
                <span>Корзина</span>
                <span v-if="LSStore.bin.length" class="counter">
                    {{ LSStore.bin.length }}
                </span>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Colors, BaseButton } from '@/shared/ui';

import { companyLogo } from '@/shared/ui/assets';
import { useLSStore } from '@/shared/model';

import burgerButtonIcon from './assets/burger-button-icon.svg';

const LSStore = useLSStore();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.bottom-block {
    @extend .grid;
    grid-template-areas: 'logo catalog search buttons';
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    gap: 38px;

    .logo {
        grid-area: logo;
        width: 215px;
        height: 54px;
    }

    .catalog-button {
        @extend .row-c;
        gap: 17px;

        grid-area: catalog;

        height: 52px;

        padding: 16px 29px;
        border-radius: 8px;

        span {
            font-size: 13px;
            text-transform: uppercase;

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

        grid-area: search;

        height: 52px;
        padding: 3px;

        background-color: #186fd4;
        border-radius: 8px;

        input {
            width: calc(100% + 25px);
            border-radius: 6px;
            padding: 15px 16px;
            font-size: 14px;
        }

        img {
            align-self: center;
            margin: 0 21px;
            width: 14px;
            height: 14px;
        }

        &::placeholder {
            font-size: 14px;
        }
    }

    .buttons {
        @extend .row;
        margin-top: 6px;
        gap: 27px;

        grid-area: buttons;

        &__button {
            @extend .column-c;

            img {
                width: 33px;
                height: 25px;
            }

            span {
                color: #6b7076;
                font-size: 14px;
            }

            &--like,
            &--compare,
            &--bin {
                position: relative;
                .counter {
                    @extend .row-c;
                    position: absolute;
                    top: -5px;
                    right: 10px;

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

    @media (max-width: 1250px) {
        grid-template-areas:
            'logo buttons'
            'catalog search';
        grid-template-columns: auto 1fr;
        gap: 15px;

        .buttons {
            justify-self: flex-end;
        }
    }

    @media (max-width: 700px) {
        .logo {
            width: 159px;
            height: 40px;
        }
        .buttons {
            gap: 6px;
            &__button {
                span {
                    display: none;
                }

                .counter {
                    right: 0;
                }
            }
        }
    }

    @media (max-width: 400px) {
        .buttons {
            &__button {
                &:first-of-type {
                    display: none;
                }
            }
        }
    }
}
</style>
