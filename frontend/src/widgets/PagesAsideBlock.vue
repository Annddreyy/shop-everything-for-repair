<template>
    <aside class="pages-aside">
        <PromotionCardComponent
            v-bind="{ ...promotionsStore.promotionCards[0] }"
        />
        <PromotionCardComponent
            v-bind="{ ...promotionsStore.promotionCards[1] }"
        />
        <MailingListForm />
    </aside>
</template>

<script setup lang="ts">
import { usePromotionCardsStore } from '@/entities/promotion/model';
import { promotionCardsAPI } from '@/entities/promotion/api';
import { onMounted } from 'vue';
import MailingListForm from './MailingListForm.vue';

const promotionsStore = usePromotionCardsStore();

onMounted(async () => {
    await promotionCardsAPI.getPromotionCards(1, 2);
});
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
