<template>
    <BasePage :title="pageTitle" :breadcrumbs="breadcrumbs">
        <div class="container">
            <div class="article-information">
                <span class="article-information__type">{{ articleType }}</span>
                <time
                    class="article-information__time"
                    :datetime="dateOfCreation.toISOString()"
                >
                    {{ formatDate(dateOfCreation) }}
                </time>
            </div>
            <div class="article" v-html="html" />
            <div class="news__aside">
                <NewsTypes
                    v-bind="countOfTypes"
                    @set-type="(type) => {
                        newsStore.currentNewsType = type as NewsType;
                        $router.push({ name: 'news' })
                    }"
                />
                <MailingListForm class="news__mailing-form" />
            </div>
        </div>
    </BasePage>
</template>

<script setup lang="ts">
import { computed, ref, type ComputedRef } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

import { newsAPI, useNewsStore } from '@/entities/news';
import type { NewsType } from '@/entities/news';
import { formatDate } from '@/shared/libs/date';
import { MailingListForm } from '@/widgets';

import BasePage from '../BasePage.vue';
import NewsTypes from './NewsTypes.vue';

const newsStore = useNewsStore();
const { countOfTypes } = storeToRefs(newsStore);
await newsStore.getCountOfTypes();

const route = useRoute();

const pageTitle = ref('');
const html = ref('');
const articleType = ref<NewsType>();
const dateOfCreation = ref<Date>(new Date());

const breadcrumbs: ComputedRef<Link[]> = computed(() => [
    { title: 'Стройопторг', link: '/' },
    { title: 'Новости', link: '/news' },
    { title: pageTitle.value, link: `/news/${route.params.id}` },
]);

const response = await newsAPI.getOneNews(route.params.id as string);

if (response.status === 'success') {
    pageTitle.value = response.data.news.title;
    html.value = response.data.news.htmlContent;
    articleType.value = response.data.news.type;
    dateOfCreation.value = new Date(response.data.news.dateOfCreation);
}
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.article-information {
    @extend .row-a-c;
    gap: 30px;

    margin-bottom: 27px;

    &__type {
        position: relative;

        padding: 16px 10px;

        border-radius: 5px;
        background-color: #f7f9fb;

        font-size: 12px;
        text-transform: uppercase;

        &::after {
            position: absolute;
            content: '●';

            right: -22px;
            top: 10px;

            color: #dedede;
        }
    }

    &__time {
        font-size: 13px;
        color: #4f4f4f;
    }
}

.article {
    margin-bottom: 80px;
}

:deep(h2) {
    font-size: 33px;
    margin-top: 27px;
    margin-bottom: 20px;
}

:deep(img) {
    width: 100%;
    margin-block: 27px;
}

:deep(p),
:deep(li) {
    line-height: 29px;
}
</style>
