<template>
    <div class="container">
        <section class="news-section">
            <div class="news-section__top">
                <h2 class="news-section__title">Последние новости</h2>
                <ButtonComponent
                    text="Больше новостей"
                    :text-color="Colors.BLUE"
                    :bg-color="Colors.GRAY"
                    class="news-section__button"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Colors } from '@/shared/ui/ButtonComponent/types';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

.news-section {
    @extend .column;
    padding: 0;

    &__top {
        @extend .row;
        justify-content: space-between;
    }

    &__title {
        font-size: var(--fz-xxl);
    }

    &__button {
        color: #117fe3;
        background-color: #f6f8fb;
        padding: 17px 20px;
        border-radius: 6px;
    }
}
</style>
