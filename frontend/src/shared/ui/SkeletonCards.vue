<template>
    <div class="skeletons">
        <div v-for="_ in 4" class="skeletons__skeleton">
            <Skeletor
                width="100%"
                height="210px"
                :style="{
                    borderRadius: '8px',
                }"
            />
            <Skeletor
                width="100%"
                height="28px"
                :style="{
                    borderRadius: '4px',
                }"
            />
            <Skeletor
                width="50%"
                height="28px"
                :style="{
                    borderRadius: '4px',
                }"
            />
            <Skeletor
                v-for="i in 3"
                :width="`${100 / i}%`"
                height="18px"
                :style="{
                    borderRadius: '4px',
                }"
            />
            <Skeletor
                width="20%"
                height="14px"
                :style="{
                    borderRadius: '4px',
                }"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Skeletor } from 'vue-skeletor';
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.skeletons {
    @extend .row;
    gap: 12px;

    flex-wrap: wrap;
    row-gap: 24px;

    &__skeleton {
        @extend .column;
        gap: 12px;

        width: 390px;
    }
}
</style>
