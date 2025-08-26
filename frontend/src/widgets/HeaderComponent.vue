<template>
    <header class="header">
        <div class="header__top">
            <div class="container top-block">
                <nav class="navigation">
                    <ul class="navigation__links">
                        <li v-for="link in links" :key="link.link">
                            <RouterLink
                                :to="link.link"
                                class="navigation__link"
                            >
                                {{ link.title }}
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
                <div class="information">
                    <span class="information__time"
                        >Ежедневно с 8:00 до 18:00</span
                    >
                    <span class="information__phone">8 800 444 00 65</span>
                    <ButtonComponent
                        text="Заказать звонок"
                        :bg-color="Colors['GRAY']"
                        :text-color="Colors['BLUE']"
                        class="information__phone-button"
                    />
                </div>
            </div>
        </div>
        <div class="header__bottom">
            <div class="container bottom-block">
                <img :src="companyLogo" alt="" />
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
                    <RouterLink to="/promotions" class="buttons_button">
                        <img :src="promotionsIcon" alt="" />
                        <span>Все акции</span>
                    </RouterLink>
                    <RouterLink to="/auth" class="buttons_button">
                        <img :src="accountIcon" alt="" />
                        <span>Войти</span>
                    </RouterLink>
                    <RouterLink to="/compare" class="buttons_button">
                        <img :src="compareIcon" alt="" />
                        <span>Сравнение</span>
                    </RouterLink>
                    <RouterLink to="/favorite" class="buttons_button">
                        <img :src="likeIcon" alt="" />
                        <span>Избранное</span>
                    </RouterLink>
                    <RouterLink to="/cart" class="buttons_button">
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
import { Colors } from '@/shared/ui/ButtonComponent/types';
import ButtonComponent from '@/shared/ui/ButtonComponent/ButtonComponent.vue';

import {
    companyLogo,
    burgerButtonIcon,
    searchIcon,
    promotionsIcon,
    likeIcon,
    cartIcon,
    accountIcon,
    compareIcon,
} from '@/assets/images';
</script>

<style scoped lang="scss">
@use '@/assets/scss/display' as *;
@use '@/assets/scss/variables' as *;

.header {
    &__top {
        padding: 9px;
        border-bottom: 1px solid var(--gray);

        .top-block {
            @extend .row-a-c;
            justify-content: space-between;

            .navigation {
                ul {
                    list-style: none;
                }

                &__links {
                    @extend .row-a-c;
                    gap: 30px;
                }

                &__link {
                    color: #6c6f71;
                    font-size: 14px;
                }
            }

            .information {
                @extend .row-a-c;
                gap: $base-gap-2;

                &__time {
                    color: #6c6f71;
                    font-size: var(--fz-small);
                }

                &__phone {
                    font-size: var(--fz-base);
                }

                &__phone-button {
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

    &__bottom {
        padding: $base-padding-7 0;

        .bottom-block {
            @extend .row-a-c;
            justify-content: space-between;

            .catalog-button {
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

                &__button {
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
