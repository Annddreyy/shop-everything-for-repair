<template>
    <div class="container">
        <div :class="$style.buttons">
            <button @click="previousPage">
                <img
                    src="./../../../assets/images/breadcrumbs/previos.svg"
                    alt="назад"
                />Назад
            </button>
            <div :class="$style.pages">
                <span
                    v-for="page in pages"
                    :key="page"
                    :class="page === currentPage ? $style.active : currentPage"
                    @click="setPage(page)"
                    >{{ page === 0 ? '...' : page }}</span
                >
            </div>
            <button @click="nextPage">
                <img
                    src="./../../../assets/images/breadcrumbs/next.svg"
                    alt="далее"
                />Далее
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

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
        result.push(1, 0, currentPage.value - 1, currentPage.value, currentPage.value + 1, 0, pagesCount);
    } else {
        result.push(1, 0, pagesCount - 2, pagesCount - 1, pagesCount);
    }

    return result
});

const nextPage = () => {
    console.log(currentPage.value);
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

<style lang="scss" module>
.buttons {
    display: flex;
    align-items: center;
    gap: 12px;

    .pages {
        display: flex;
        gap: 12px;
    }

    button {
        display: flex;
        gap: 12px;
        align-items: center;

        width: max-content;
        height: 57px;

        padding: 0 12px;

        background-color: transparent;
        border: 1px solid #dfdfdf;
        border-radius: 5px;
    }

    .pages {
        span {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 57px;
            height: 57px;

            border: 1px solid #dfdfdf;
            border-radius: 5px;

            cursor: pointer;
        }

        span.active {
            background-color: #011120;
            color: white;
            border-color: #011120;
        }
    }
}
</style>
