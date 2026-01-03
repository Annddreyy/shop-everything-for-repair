<template>
    <RouterLink :to="`/promotions/${id}`">
        <article class="promotion-card">
            <div
                :class="[
                    'promotion-card__main',
                    {
                        'promotion-card__main--with-description':
                            withDescription,
                    },
                ]"
                :style="{ backgroundImage: `url(${img})` }"
            >
                <h3 class="promotion-card__title">{{ title }}</h3>
                <span class="promotion-card__percent">
                    до -{{ promotionPercent }}%
                </span>
            </div>
            <div v-if="withDescription" class="promotion-card__info">
                <p class="promotion-card__description">{{ description }}</p>
                <RouterLink class="promotion-card__link" to=""
                    >Подробнее об акции</RouterLink
                >
            </div>
        </article>
    </RouterLink>
</template>

<script setup lang="ts">
import type { Promotion } from '../model/usePromotions';

type Props = Promotion & { withDescription?: boolean };

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.promotion-card {
    @extend .column;
    gap: 15px;

    width: 100%;

    &__main {
        height: 180px;

        padding: 36px 24px;

        border-radius: 8px;
        background-size: cover;

        &--with-description {
            height: 220px;
        }
    }

    &__info {
        @extend .column;
        gap: 5px;
    }

    &__title {
        font-size: var(--fz-large);
    }

    &__percent {
        width: max-content;
        padding: 6px 8px;

        border-radius: 6px;

        background-color: #011120;

        font-size: 14px;
        color: var(--white);
    }

    &__description {
        font-size: 20px;
        color: #2c333d;
    }

    &__link {
        font-size: 16px;
        color: #186fd4;

        text-decoration: underline;
    }
}
</style>
