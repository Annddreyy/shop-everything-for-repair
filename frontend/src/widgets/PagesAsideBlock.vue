<template>
    <aside class="pages-aside">
        <PromotionCard v-bind="promotionsStore.promotions[0]" />
        <PromotionCard v-bind="promotionsStore.promotions[1]" />
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
.pages-aside {
    flex: 1;

    :deep(.promotion-card) {
        max-width: 390px;
        width: initial;
    }
}
</style>
