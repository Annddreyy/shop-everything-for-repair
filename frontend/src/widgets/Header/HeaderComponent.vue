<template>
    <header>
        <div :class="$style.top">
            <div class="container">
                <nav>
                    <ul :class="$style.links">
                        <li v-for="link in links" :key="link.link">
                            <RouterLink :to="link.link" :class="$style.link">
                                {{ link.title }}
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
                <div :class="$style.information">
                    <span :class="$style.time">Ежедневно с 8:00 до 18:00</span>
                    <span :class="$style.phone">8 800 444 00 65</span>
                    <ButtonComponent
                        text="Заказать звонок"
                        :bg-color="Colors['GRAY']"
                        :text-color="Colors['BLUE']"
                        :class="$style.phoneButton"
                    />
                </div>
            </div>
        </div>
        <div :class="$style.bottom">
            <div class="container">
                <img :src="logo" alt="" />
                <ButtonComponent
                    text="Каталог"
                    :icon="burgerButton"
                    :bg-color="Colors['BLUE']"
                    :text-color="Colors['WHITE']"
                    :class="$style.catalogButton"
                />
                <div :class="$style.search">
                    <input
                        type="search"
                        placeholder="Найти среди 50000 товаров. Например: Дрель Bosh"
                    />
                    <img :src="search" alt="" />
                </div>
                <div :class="$style.buttons">
                    <RouterLink to="/promotions" :class="$style.button">
                        <img :src="promotionsIcon" alt="" />
                        <span>Все акции</span>
                    </RouterLink>
                    <RouterLink to="/auth" :class="$style.button">
                        <img :src="accountIcon" alt="" />
                        <span>Войти</span>
                    </RouterLink>
                    <RouterLink to="/compare" :class="$style.button">
                        <img :src="compareIcon" alt="" />
                        <span>Сравнение</span>
                    </RouterLink>
                    <RouterLink to="/favorite" :class="$style.button">
                        <img :src="likeIcon" alt="" />
                        <span>Избранное</span>
                    </RouterLink>
                    <RouterLink to="/cart" :class="$style.button">
                        <img :src="cartIcon" alt="" />
                        <span>Корзина</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { links } from '@/shared/config/header/links';

import logo from './../../assets/images/logo.svg';
import burgerButton from './../../assets/images/header/burger-button.svg';
import search from './../../assets/images/header/search.svg';

import promotionsIcon from './../../assets/images/header/promotions-icon.svg';
import likeIcon from './../../assets/images/header/like-icon.svg';
import cartIcon from './../../assets/images/header/cart-icon.svg';
import accountIcon from './../../assets/images/header/account-icon.svg';
import compareIcon from './../../assets/images/header/compare-icon.svg';
import ButtonComponent from '@/shared/ui/ButtonComponent/ButtonComponent.vue';
import { Colors } from '@/shared/ui/ButtonComponent/types';
</script>

<style module lang="scss">
@use './../../assets/scss/display' as *;
@use './../../assets/scss/variables' as *;

header {
    .top {
        padding: 9px;
        border-bottom: 1px solid var(--gray);
        div {
            @extend .row-a-c;
            justify-content: space-between;
            .links {
                @extend .row-a-c;
                gap: 30px;

                .link {
                    color: #6c6f71;
                    font-size: 14px;
                }
            }

            .information {
                @extend .row-a-c;
                gap: $base-gap-2;

                .time {
                    color: #6c6f71;
                    font-size: var(--fz-small);
                }

                .phone {
                    font-size: var(--fz-base);
                }

                .phoneButton {
                    padding: $base-padding-2;
                    border-radius: $base-border-radius-2;

                    * {
                        font-size: var(--fz-mini);
                        font-weight: bold;
                    }
                }
            }
        }
    }

    .bottom {
        padding: $base-padding-7 0;
        div {
            @extend .row-a-c;
            justify-content: space-between;

            .catalogButton {
                height: 52px;
                padding: $base-padding-4 $base-padding-8;
                border-radius: $base-border-radius-2;

                span {
                    font-size: var(--fz-small);
                }
            }

            .search {
                @extend .row;
                height: 52px;
                gap: 0;
                background-color: #186fd4;
                padding: 3px;
                border-radius: $base-border-radius-2;
                input {
                    width: 660px;
                    border-radius: $base-border-radius-2;
                    padding: 15px $base-padding-4;
                    font-size: var(--fz-medium);
                }

                img {
                    padding: 0 21px;
                }
            }

            .buttons {
                @extend .row;
                .button {
                    @extend .column-a-c;
                    span {
                        color: #6b7076;
                        font-size: var(--fz-medium);
                    }
                }
            }
        }
    }
}
</style>
