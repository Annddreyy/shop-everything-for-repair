<template>
    <div class="characteristics">
        <div
            v-for="characteristic in characteristics"
            :key="characteristic.title"
            class="characteristic"
        >
            <span class="characteristic__title">{{
                characteristic.title
            }}</span>
            <div class="characteristic__border"></div>
            <span class="characteristic__value">{{
                characteristic.value
            }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
type Characteristic = {
    title: string;
    value: string;
};
defineProps<{
    characteristics: Characteristic[];
}>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

.characteristics {
    @extend .column;
    gap: 11px;

    width: 400px;
    margin-left: 20px;

    .characteristic {
        @extend .row;
        gap: 10px;

        * {
            font-size: 15px;
            line-height: 28px;
        }

        &__border {
            border-bottom: 1px dashed #d1d1d1;
            margin-bottom: 15px;
            flex-grow: 1;
        }

        &__value {
            color: #7d7f83;
        }
    }
}
</style>
