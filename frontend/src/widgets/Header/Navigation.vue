<template>
    <nav class="navigation">
        <button class="navigation__burger-button">☰</button>
        <ul class="navigation__links">
            <li v-for="link in breadcrumbs" :key="link.link">
                <RouterLink :to="link.link" class="navigation__link">
                    {{ link.title }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { breadcrumbs } from './config/links';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

.navigation {
    ul {
        list-style: none;
    }
    &__burger-button {
        display: none;
    }
    &__links {
        @extend .row-a-c;
        gap: 30px;
    }
    &__link {
        color: #6c6f71;
        font-size: 14px;
    }
}
</style>
