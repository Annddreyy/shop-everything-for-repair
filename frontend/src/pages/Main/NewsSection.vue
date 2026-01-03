<template>
    <div class="container">
        <section class="news-section">
            <div class="news-section__top">
                <h2 class="news-section__title">Последние новости</h2>
                <BaseButton
                    text="Больше новостей"
                    :text-color="Colors.BLUE"
                    :bg-color="Colors.GRAY"
                    class="news-section__button"
                />
            </div>
            <Suspense :timeout="200">
                <NewsList :news="news" />
                <template #fallback>
                    <SkeletonCards />
                </template>
            </Suspense>
        </section>
    </div>
</template>

<script setup lang="ts">
import { NewsList, type News } from '@/entities/news';
import { Colors, BaseButton, SkeletonCards } from '@/shared/ui';

defineProps<{
    news: News[];
}>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.news-section {
    @extend .column;
    padding: 0;

    &__top {
        @extend .row;
        justify-content: space-between;

        margin-bottom: 22px;
    }

    &__title {
        font-size: 31px;
        margin: 0;
    }

    &__button {
        padding: 14px 20px;

        background-color: #f6f8fb;
        color: #117fe3;

        border-radius: 6px;

        * {
            font-size: 14px;
            line-height: 11px;
        }
    }
}
</style>
