<template>
    <div class="container">
        <section class="regions">
            <h2>Работаем по регионам:</h2>
            <div class="regions__list">
                <article class="region" v-for="region in regionsList" :key="region.city">
                    <span class="region__city">{{ region.city }}</span>
                    <span class="region__phone">{{ region.phone }}</span>
                    <span class="region__email">{{ region.email }}</span>
                </article>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { regionsList } from '../../config/regions';
</script>

<style lang="scss" scoped>
@use './../../../../assets/scss/display' as *;

.regions {
    @extend .column;
    gap: 25px;

    margin-top: 50px;

    &__list {
        @extend .row;
        gap: 71px;
        margin-bottom: 80px;

        .region {
            @extend .column;
            gap: 7px;

            position: relative;

            &:not(:last-child) {
                &::after {
                    position: absolute;
                    content: '';
                    top: 0;
                    bottom: 0;
                    right: -35px;
                    border: 1px solid #E5E9ED;
                }
            }

            &__city {
                font-size: 15px;
            }

            &__phone {
                font-size: 18px;
                font-weight: 550px;
            }

            &__email {
                font-size: 15px;
                color: #186FD4;
                text-decoration: underline;
            }
        }
    }
}
</style>
