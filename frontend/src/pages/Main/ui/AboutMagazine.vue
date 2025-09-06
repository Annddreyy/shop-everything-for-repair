<template>
    <section class="about">
        <div class="about__container container">
            <div class="about__information">
                <h2 class="about__title">О нашем магазине</h2>
                <p class="about__purpose">
                    Цель и главная задача компании - создать сервис, который не
                    ограничится продажей строительных и отделочных материалов, а
                    будет решать задачи и трудности, с которыми сталкиваются
                    люди во время ремонта.
                </p>
                <div class="about__statistics-list">
                    <div class="about__statistics">
                        <span class="about__count">17 805,3 м<sup>2</sup></span>
                        <span class="about__description">
                            торговых и складских помещений
                        </span>
                    </div>
                    <div class="about__statistics">
                        <span class="about__count">50 000+</span>
                        <span class="about__description">
                            наименований товара
                        </span>
                    </div>
                    <div class="about__statistics">
                        <span class="about__count">2 500+</span>
                        <span class="about__description">
                            постоянных клиентов
                        </span>
                    </div>
                    <div class="about__statistics">
                        <span class="about__count">440</span>
                        <span class="about__description">
                            опытных сотрудников
                        </span>
                    </div>
                </div>
                <p class="about_text">
                    Уже второе десятилетие мы готовы воплотить в реальность Вашу
                    мечту о красивом, комфортабельном доме, благоустроенном
                    современном офисе, уютной теплой даче, помочь реализовать
                    любые строительные и дизайнерские фантазии и с минимальными
                    затратами времени и денежных средств.
                </p>
                <ButtonComponent
                    text="Подробнее о компании &nbsp;&gt;"
                    :bg-color="Colors['BLACK']"
                    :text-color="Colors['WHITE']"
                    class="about__button"
                />
            </div>
            <img :src="aboutCompanyImg" alt="" class="about__img" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { Colors } from '@/shared/ui/ButtonComponent/types';
import { aboutCompanyImg } from '../assets';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

.about {
    position: relative;
    margin: 32px 0;
    background-color: #f9fafb;

    &__container {
        @extend .row-a-c;
        justify-content: space-between;
        margin-right: 0;
    }

    &__information {
        @extend .column-j-s;
        gap: 8px;
        position: relative;
        margin: 30px 0;
        z-index: 1;
        width: 40%;
    }

    &__title {
        align-self: flex-start;
        font-size: var(--fz-xxl);
    }

    &__purpose {
        font-size: 17px;
        font-weight: bold;
    }

    &__statistics-list {
        @extend .row;
    }

    &__statistics {
        @extend .column-a-s;
        @extend .column-j-s;
        gap: 8px;
    }

    &__count {
        font-size: 26px;
        font-weight: bolder;
        color: #117fe3;
    }

    sup {
        font-size: var(--fz-base);
        font-weight: bolder;
        color: #117fe3;
    }

    &__button {
        align-self: flex-start;

        padding: 24px 27px;
        border-radius: 8px;

        text-transform: uppercase;
        font-size: var(--fz-small);
    }

    &__text {
        font-size: var(--fz-medium);
    }

    &__img {
        position: relative;
    }
}
</style>
