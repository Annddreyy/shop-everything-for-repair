<template>
    <article class="advantage">
        <img class="advantage__img" :src="img" :alt="description" />
        <div class="advantage__information">
            <span class="advantage__description">
                {{ description }}
            </span>
            <span
                v-if="withFullDescription && fullDescription"
                class="advantage__full-description"
            >
                {{ fullDescription }}
            </span>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { Advantage } from '../model/useAdvantage';

type Props = Advantage & { withFullDescription?: boolean };

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.advantage {
    @extend .row-a-c;
    gap: 11px;

    &__img {
        width: 21px;
        height: 16px;
        object-fit: cover;
    }
}
</style>
