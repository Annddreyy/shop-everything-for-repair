<template>
    <div class="container">
        <div :class="$style.links">
            <RouterLink
                :to="link.link"
                v-for="link in links"
                :key="link.link"
                >{{ link.title }}</RouterLink
            >
        </div>
    </div>
</template>

<script setup lang="ts">
export type Link = {
    link: `/${string}`;
    title: string;
};
const { links } = defineProps<{ links: Link[] }>();
</script>

<style lang="scss" module>
.links {
    display: flex;
    gap: 1em;

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
            left: -10px;
            color: #91969d;
        }
    }
}
</style>
