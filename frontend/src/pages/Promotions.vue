<template>
    <BasePage title="Акции" :breadcrumbs="breadcrumbs">
        <div class="container">
            <PromotionsList :promotions="promotions" />
            <Pagination
                class="pagination"
                v-model="currentPage"
                :pages-count="pagesCount"
            />
        </div>
    </BasePage>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import { Pagination } from '@/shared/ui';
import { PromotionsList, usePromotionsStore } from '@/entities/promotion';

import BasePage from './BasePage.vue';

const breadcrumbs: Link[] = [
    { title: 'Стройопторг', link: '/' },
    { title: 'Акции', link: '/promotions' },
];

const promotionsList = usePromotionsStore();
const { promotions, pagesCount } = storeToRefs(promotionsList);
promotions.value = [];

const currentPage = ref(1);

watch(
    currentPage,
    async () => {
        await promotionsList.getPromotions(
            currentPage.value,
            DEFAULT_API_RESPONSE_PAGE_VALUE,
        );
    },
    { immediate: true },
);
</script>

<style lang="scss" scoped>
.pagination {
    margin-block: 60px;
}
</style>
