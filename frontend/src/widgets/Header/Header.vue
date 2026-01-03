<template>
    <header class="header">
        <div class="header__top">
            <div class="container top-block">
                <Navigation />
                <Information />
            </div>
        </div>
        <div class="header__bottom">
            <Bottom />
        </div>
    </header>
</template>

<script setup lang="ts">
import Navigation from './Navigation/Navigation.vue';
import Information from './Information.vue';
import Bottom from './Bottom/Bottom.vue';
</script>

<style scoped lang="scss">
@use '@/app/styles/display' as *;

.header {
    &__top {
        border-bottom: 1px solid var(--gray);
        height: 50px;

        .top-block {
            @extend .row-c;
            height: inherit;
            justify-content: space-between;
        }
    }

    &__bottom {
        padding: 27px 0;
        padding-bottom: 20px;
    }
}

@media (max-width: 1256px) {
    time {
        display: none;
    }
}

@media (max-width: 1024px) {
    .navigation {
        &__links {
            display: none !important;
        }

        &__burger-button {
            display: block !important;
        }
    }
}
</style>
