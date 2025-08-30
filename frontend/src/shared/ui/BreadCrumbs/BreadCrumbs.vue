<template>
    <div class="container">
        <div class="links">
            <RouterLink :to="link.link" v-for="link in links" :key="link.link">
                {{ link.title }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Link } from '@/shared/types/types';

defineProps<{
    links: Link[];
}>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

.links {
    display: flex;
    gap: 30px;
    padding: 18px 0;

    a {
        &:last-child {
            color: #91969d;
        }
    }

    a + a {
        position: relative;
        &::before {
            position: absolute;
            content: '/';
            left: -15px;
            color: #91969d;
        }
    }
}
</style>
