<template>
    <section :class="$style.linksBlock">
        <div v-for="linksCategory in links" :key="linksCategory.category">
            <p :class="$style.category">{{ linksCategory.category }}</p>
            <ul :class="$style.linksList">
                <li
                    v-for="link in linksCategory.links"
                    :key="link.link"
                    :class="$style.linkItem"
                >
                    <RouterLink :to="link.link">{{ link.title }}</RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import { links } from '@/shared/config/footer/links';
</script>

<style lang="scss" module>
@use './../../assets/scss/display' as *;
@use './../../assets/scss/variables' as *;

.linksBlock {
    @extend .row-a-c;
    align-items: stretch;
    justify-content: space-between;

    padding: $base-padding-9 0;
    border-bottom: 1px solid #dce1e7;

    .category {
        font-weight: bolder;
        margin-bottom: $base-margin-4;
    }

    .linksList {
        @extend .grid-2;
        gap: $base-gap-4;
        row-gap: $base-gap;
    }
}
</style>
