<template>
    <aside class="pages-aside">
        <PromotionCard class="promotion1" v-bind="promotionsStore.promotions[0]" />
        <PromotionCard class="promotion2" v-bind="promotionsStore.promotions[1]" />
        <MailingListForm />
    </aside>
</template>

<script setup lang="ts">
import { usePromotionsStore, PromotionCard } from '@/entities/promotion';
import MailingListForm from './MailingListForm.vue';

const promotionsStore = usePromotionsStore();
await promotionsStore.getPromotions(1, 2);
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.pages-aside {
    @extend .column;
    gap: 30px;

    width: max-content;

    * {
        max-width: 331px;
    }

    :deep(.promotion-card__main) {
        @extend .column-j-c;
        gap: 7px;
        height: 273px;
    }

    :deep(.promotion-card) {
        max-width: 331px;
        width: initial;
    }

    :deep(.promotion-card__title) {
        width: 205px;
        font-size: 22px;
        font-weight: normal;
        line-height: 26px;
    }

    @media (max-width: 1250px) {
        width: 100%;

        display: grid;
        grid-template-areas: 'promotion1 promotion2'
            'mailing-form mailing-form';
        grid-template-columns: repeat(2, 1fr);

        * {
            max-width: 100%;
        }

        .promotion1,
        .promotion2 {
            height: 100%;
        }

        .promotion1 {
            grid-area: promotion1;
        }

        .promotion2 {
            grid-area: promotion2;
        }

        :deep(.promotion-card) {
            width: 100%;
            max-width: 100%;
        }

        :deep(.mailing-list-form) {
            grid-area: mailing-form;
            max-width: 100%;
        }
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
}
</style>
