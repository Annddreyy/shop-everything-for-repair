<template>
    <div class="container">
        <div class="buttons">
            <button @click="previousPage">
                <img :src="previosIcon" alt="Назад" />Назад
            </button>
            <div class="pages">
                <span
                    v-for="page in pages"
                    :key="page"
                    :class="[
                        'page',
                        page === currentPage ? 'page--active' : currentPage,
                    ]"
                    @click="setPage(page)"
                >
                    {{ page === 0 ? '...' : page }}
                </span>
            </div>
            <button @click="nextPage">
                <img :src="nextIcon" alt="Далее" />Далее
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { previosIcon, nextIcon } from '@/assets/images';

const pagesCount = 20;
const MAX_PAGES_COUNT = 10;
const currentPage = ref(1);

const pages = computed(() => {
    const result: number[] = [];
    if (pagesCount <= MAX_PAGES_COUNT) {
        for (let i = 1; i <= pagesCount; i++) {
            result.push(i);
        }
    } else if (currentPage.value < 5) {
        result.push(1, 2, 3, 4, 5, 0, pagesCount);
    } else if (pagesCount - 3 >= currentPage.value && currentPage.value >= 5) {
        result.push(
            1,
            0,
            currentPage.value - 1,
            currentPage.value,
            currentPage.value + 1,
            0,
            pagesCount,
        );
    } else {
        result.push(1, 0, pagesCount - 2, pagesCount - 1, pagesCount);
    }

    return result;
});

const nextPage = () => {
    if (currentPage.value + 1 <= pagesCount) {
        currentPage.value++;
    }
};

const previousPage = () => {
    if (currentPage.value - 1 >= 1) {
        currentPage.value--;
    }
};

const setPage = (page: number) => {
    currentPage.value = page;
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

.buttons {
    @extend .row-a-c;
    gap: 12px;

    button {
        @extend .row-a-c;
        gap: 12px;

        width: max-content;
        height: 57px;

        padding: 0 12px;

        background-color: transparent;
        border: 1px solid #dfdfdf;
        border-radius: 5px;
    }

    .pages {
        @extend .row;
        gap: 12px;

        .page {
            @extend .row-c;

            width: 57px;
            height: 57px;

            border: 1px solid #dfdfdf;
            border-radius: 5px;

            cursor: pointer;

            &--active {
                background-color: #011120;
                color: white;
                border-color: #011120;
            }
        }
    }
}
</style>
