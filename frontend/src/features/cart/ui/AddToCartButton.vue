<template>
    <div :class="['cart-button', { 'cart-button--active': isBinProduct }]">
        <img v-if="!isBinProduct" :src="binIcon" alt="Добавить в корзину" />
        <span>{{ isBinProduct ? 'Добавлено' : 'Купить' }}</span>
    </div>
</template>

<script setup lang="ts">
import { binIcon } from '@/assets/images';

defineProps<{
    isBinProduct: boolean;
}>();
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;

.cart-button {
    width: 120px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;

    padding: 7px 11px;
    border-radius: 6px;

    background-color: #186fd4;

    span {
        font-family: Helvetica-bold;
        font-size: var(--fz-medium);
        color: var(--white);
    }

    &:hover {
        background-color: #063871;
    }

    &--active {
        border: 1px solid #186fd4;
        background-color: transparent;

        span {
            color: #186fd4;
        }

        &:hover {
            background-color: #186fd4;

            span {
                color: white;
            }
        }
    }
}
</style>
