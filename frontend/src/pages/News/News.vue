<template>
    <BasePage title="Новости" :breadcrumbs="breadcrumbs">
        <div class="container">
            <div class="news">
                <div class="news__main">
                    <NewsList :news="news" />
                    <div class="news__pagination">
                        <Pagination
                            v-model="currentPage"
                            :pages-count="pagesCount"
                        />
                    </div>
                </div>
                <div class="news__aside">
                    <NewsTypes v-bind="countOfTypes" @set-type="setType" />
                    <MailingListForm class="news__mailing-form" />
                </div>
            </div>
        </div>
    </BasePage>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import { MailingListForm } from '@/widgets';
import { NewsList, useNewsStore, type NewsType } from '@/entities/news';
import { Pagination } from '@/shared/ui';

import BasePage from '../BasePage.vue';
import NewsTypes from './NewsTypes.vue';

const breadcrumbs: Link[] = [
    { title: 'Стройопторг', link: '/' },
    { title: 'Новости', link: '/news' },
];

const newsStore = useNewsStore();
const { news, pagesCount, countOfTypes, currentNewsType } = storeToRefs(newsStore);
news.value = [];
await newsStore.getCountOfTypes();

const currentPage = ref(1);


watch(
    [currentPage, currentNewsType],
    async () => {
        if (currentPage.value) {
            await newsStore.getNews(
                currentPage.value,
                DEFAULT_API_RESPONSE_PAGE_VALUE,
                currentNewsType.value,
            );
        }
    },
    {
        immediate: true,
    },
);

const setType = (type?: NewsType) => {
    newsStore.currentNewsType = type!;
};
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.news {
    @extend .row;
    gap: 20px;

    &__main {
        flex: 1;
    }

    &__aside {
        @extend .column;
        gap: 20px;
    }

    &__pagination {
        margin-top: 70px;
        margin-bottom: 110px;
    }

    &__mailing-form {
        width: 331px;
    }
}
</style>
