<template>
    <section class="about">
        <div class="about__container">
            <div class="about__information">
                <h2 class="about__title">О нашем магазине</h2>
                <p class="about__purpose">
                    Цель и главная задача компании- создать сервис, который не
                    ограничится продажей строительных и отделочных материалов, а
                    будет решать задачи и трудности, с которыми сталкиваются
                    люди во время ремонта.
                </p>
                <div>
                    <div class="about__statistics">
                        <span class="about__count">17 805,3 м<sup>2</sup></span>
                        <span class="about__description"
                            >торговых и складских помещений</span
                        >
                    </div>
                    <div class="about_statistics">
                        <span class="about__count">50 000+</span>
                        <span class="about__description"
                            >наименований товара</span
                        >
                    </div>
                    <div class="about_statistics">
                        <span class="about_count">2 500+</span>
                        <span class="about_description"
                            >постоянных клиентов</span
                        >
                    </div>
                    <div class="about_statistics">
                        <span class="about_count">440</span>
                        <span class="about_description"
                            >опытных сотрудников</span
                        >
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
            <img :src="aboutCompanyImg" alt="" class="about_img" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { Colors } from '@/shared/ui/ButtonComponent/types';
import { aboutCompanyImg } from '@/assets/images';
</script>

<style lang="scss" module>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;

.about {
    position: relative;
    margin-top: $base-margin-8 0;
    background-color: #f9fafb;
    padding: $base-padding-9 0;

    &__container {
        @extend .row-a-c;
    }

    &__information {
        @extend .column-j-s;
        gap: $base-gap-2;
        position: relative;
        z-index: 2;
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

    &__statistics {
        @extend .column-a-s;
        @extend .column-j-s;
        gap: $base-gap-2;
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
        border-radius: $base-border-radius-2;

        text-transform: uppercase;
        font-size: var(--fz-small);
    }

    &__text {
        font-size: var(--fz-medium);
    }

    &__img {
        position: absolute;
        right: 0;
    }
}
</style>
