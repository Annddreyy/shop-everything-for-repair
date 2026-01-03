<template>
    <div :class="['cart-button', { 'cart-button--active': isBinProduct }]">
        <img
            v-if="!isBinProduct"
            class="cart-button__image"
            src="./assets/cart-icon.svg"
            alt="Добавить в корзину"
        />
        <span>{{ isBinProduct ? 'Добавлено' : 'Купить' }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    isBinProduct?: boolean;
}>();
</script>

<style scoped lang="scss">
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
        color: white;
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

    &__image {
        filter: brightness(0) invert(1);
    }
}
</style>
