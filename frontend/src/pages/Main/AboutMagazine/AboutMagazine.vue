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
                <p class="about__text">
                    Уже второе десятилетие мы готовы воплотить в реальность Вашу
                    мечту о красивом, комфортабельном доме, благоустроенном
                    современном офисе, уютной теплой даче, помочь реализовать
                    любые строительные и дизайнерские фантазии и с минимальными
                    затратами времени и денежных средств.
                </p>
                <BaseButton
                    text="Подробнее о компании &gt;"
                    :bg-color="Colors['BLACK']"
                    :text-color="Colors['WHITE']"
                    class="about__button"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { BaseButton, Colors } from '@/shared/ui';
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.about {
    background-color: #f9fafb;

    &__container {
        @extend .row-a-c;
        justify-content: space-between;

        padding-top: 67px;
        padding-bottom: 80px;
    }

    &__information {
        @extend .column-j-s;
        gap: 8px;

        width: 50%;
        z-index: 1;
    }

    &__title {
        align-self: flex-start;
        font-size: 31px;
    }

    &__purpose {
        font-size: 17px;
    }

    &__statistics-list {
        @extend .grid-4;
        align-content: flex-start;
        gap: 0;
    }

    &__statistics {
        @extend .column-a-s;
        @extend .column-j-s;
        gap: 0;

        margin-top: 16px;
    }

    &__count {
        font-size: 26px;
        color: #117fe3;
    }

    &__description {
        line-height: 18px;
    }

    sup {
        font-size: var(--fz-base);
        font-weight: bolder;
        color: #117fe3;
    }

    &__button {
        align-self: flex-start;
        gap: 8px;

        margin-top: 20px;

        padding: 18px 27px;
        border-radius: 8px;

        * {
            text-transform: uppercase;
            font-variant: small-caps;

            font-size: 13px;
            line-height: 18px;
        }
    }

    &__text {
        margin-top: 25px;

        font-size: 15px;
        line-height: 26px;
    }
}
</style>
