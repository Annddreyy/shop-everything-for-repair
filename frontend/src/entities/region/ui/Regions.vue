<template>
    <div class="container">
        <section class="regions">
            <h2>Работаем по регионам:</h2>
            <div class="regions__list">
                <RegionComponent
                    v-for="region in regions"
                    :key="region.id"
                    v-bind="region"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { Region } from '@/entities/region';
import RegionComponent from './Region.vue';
const { regions } = defineProps<{
    regions: Region[];
}>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

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

                    border: 1px solid #e5e9ed;
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
                color: #186fd4;

                text-decoration: underline;
            }
        }
    }
}
</style>
