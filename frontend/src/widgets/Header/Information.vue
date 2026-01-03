<template>
    <div class="information">
        <time class="information__time">Ежедневно с 8:00 до 18:00</time>
        <span class="information__phone">8 800 444 00 65</span>
        <BaseButton
            text="Заказать звонок"
            :bg-color="Colors['GRAY']"
            :text-color="Colors['BLUE']"
            class="information__phone-button"
            @callback="openOrderCallModal"
        />
    </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/entities/modal';
import { Colors, BaseButton } from '@/shared/ui';

const modalStore = useModalStore();

const openOrderCallModal = () => {
    modalStore.isOpen = true;
    modalStore.type = 'orderCall';
};
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.information {
    @extend .row-a-c;
    gap: 9px;

    &__time {
        margin-right: 16px;
        color: #6c6f71;
        font-size: 12px;
        letter-spacing: 1px;
    }

    &__phone {
        font-size: 16px;
    }

    &__phone-button {
        padding: 4px 12px;
        border-radius: 4px;
        text-transform: uppercase;
        * {
            font-size: 11px;
        }
    }

    @media (max-width: 600px) {
        &__time {
            display: none;
        }
    }
}
</style>
