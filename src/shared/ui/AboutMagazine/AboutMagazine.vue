<template>
    <section :class="$style.about">
        <div class="container">
            <div :class="$style.left">
                <h2 :class="$style.title">О нашем магазине</h2>
                <p :class="$style.textTop">
                    Цель и главная задача компании- создать сервис, который не
                    ограничится продажей строительных и отделочных материалов, а
                    будет решать задачи и трудности, с которыми сталкиваются
                    люди во время ремонта.
                </p>
                <div>
                    <div :class="$style.statistics">
                        <span :class="$style.count"
                            >17 805,3 м<sup>2</sup></span
                        >
                        <span :class="$style.description"
                            >торговых и складских помещений</span
                        >
                    </div>
                    <div :class="$style.statistics">
                        <span :class="$style.count">50 000+</span>
                        <span :class="$style.description"
                            >наименований товара</span
                        >
                    </div>
                    <div :class="$style.statistics">
                        <span :class="$style.count">2 500+</span>
                        <span :class="$style.description"
                            >постоянных клиентов</span
                        >
                    </div>
                    <div :class="$style.statistics">
                        <span :class="$style.count">440</span>
                        <span :class="$style.description"
                            >опытных сотрудников</span
                        >
                    </div>
                </div>
                <p :class="$style.textBottom">
                    Уже второе десятилетие мы готовы воплотить в реальность Вашу
                    мечту о красивом, комфортабельном доме, благоустроенном
                    современном офисе, уютной теплой даче, помочь реализовать
                    любые строительные и дизайнерские фантазии и с минимальными
                    затратами времени и денежных средств.
                </p>
                <button :class="$style.button">
                    Подробнее о компании &nbsp;&gt;
                </button>
            </div>
            <img :src="aboutCompany" alt="" />
        </div>
    </section>
</template>

<script setup lang="ts">
import aboutCompany from './../../../assets/images/main_page/about_company.svg';
</script>

<style lang="scss" module>
@use './../../../assets/scss/variables' as *;
@use './../../../assets/scss/display' as *;

.about {
    position: relative;
    margin-top: $base-margin-8 0;
    background-color: #f9fafb;
    padding: $base-padding-9 0;

    div {
        @extend .row-a-c;

        .left {
            position: relative;
            z-index: 2;
            width: 40%;
            @extend .column-j-s;
            gap: $base-gap-2;

            .title {
                align-self: flex-start;
                font-size: var(--fz-xxl);
            }

            .textTop {
                font-size: 17px;
                font-weight: bold;
            }

            .statistics {
                @extend .column-a-s;
                @extend .column-j-s;
                gap: $base-gap-2;

                .count {
                    font-size: 26px;
                    font-weight: bolder;
                    color: #117fe3;
                }

                sup {
                    font-size: var(--fz-base);
                    font-weight: bolder;
                    color: #117fe3;
                }
            }

            .button {
                align-self: flex-start;
                padding: 24px 27px;

                background-color: #011120;
                color: white;
                border-radius: $base-border-radius-2;

                text-transform: uppercase;
                font-size: var(--fz-small);
            }

            .textBottom {
                font-size: var(--fz-medium);
            }
        }

        img {
            position: absolute;
            right: 0;
        }
    }
}
</style>
