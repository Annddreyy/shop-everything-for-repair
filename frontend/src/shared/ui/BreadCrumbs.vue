<template>
    <div class="breadcrumbs">
        <RouterLink
            v-for="link in breadcrumbs"
            :to="link.link"
            :key="link.link"
        >
            {{ link.title }}
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    breadcrumbs: Link[];
}>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.breadcrumbs {
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
