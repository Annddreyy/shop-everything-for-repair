<template>
    <section class="breadcrumbs-block">
        <div
            v-for="linksCategory in breadcrumbs"
            :key="linksCategory.category"
            class="breadcrumbs-group"
        >
            <p class="breadcrumbs-group__category">
                {{ linksCategory.category }}
            </p>
            <ul class="breadcrumbs-group__links-list">
                <li
                    v-for="link in linksCategory.breadcrumbs"
                    :key="link.link"
                    class="breadcrumbs-group__link"
                >
                    <RouterLink :to="link.link">{{ link.title }}</RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import { breadcrumbs } from './config/links';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;
@use '@/assets/scss/variables' as *;

.breadcrumbs-block {
    @extend .row-a-c;
    align-items: stretch;
    justify-content: space-between;

    padding: $base-padding-9 0;
    border-bottom: 1px solid #dce1e7;

    .breadcrumbs-group {
        &__category {
            font-weight: bolder;
            margin-bottom: $base-margin-4;
        }

        &__links-list {
            @extend .grid-2;
            list-style-type: none;
            gap: $base-gap-4;
            row-gap: $base-gap;
        }
    }
}
</style>
