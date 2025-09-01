<template>
    <section class="links-block">
        <div
            v-for="linksCategory in links"
            :key="linksCategory.category"
            class="links-group"
        >
            <p class="links-group__category">{{ linksCategory.category }}</p>
            <ul class="links-group__links-list">
                <li
                    v-for="link in linksCategory.links"
                    :key="link.link"
                    class="links-group__link"
                >
                    <RouterLink :to="link.link">{{ link.title }}</RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import { links } from '@/widgets/Footer/config/links';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;
@use '@/assets/scss/variables' as *;

.links-block {
    @extend .row-a-c;
    align-items: stretch;
    justify-content: space-between;

    padding: $base-padding-9 0;
    border-bottom: 1px solid #dce1e7;

    .links-group {
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
