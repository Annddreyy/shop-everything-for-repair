<template>
    <Teleport to="#modal">
        <div class="modal">
            <div class="modal__overlay">
                <div class="modal__content">
                    <div class="modal__body" ref="modal">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { useModalStore } from '@/entities/modal';
import { onClickOutside } from '@vueuse/core';
import { Teleport, useTemplateRef } from 'vue';

const modalStore = useModalStore();

const modal = useTemplateRef('modal');

onClickOutside(modal, () => {
    modalStore.isOpen = false;
    modalStore.type = null;
});
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1000;

    &__overlay {
        @extend .row-c;
        width: 100%;
        height: 100%;

        background-color: #011120e6;
    }

    &__content {
        @extend .column;
        gap: 0;
        padding: 40px;

        border-radius: 8px;
        background-color: white;
    }

    &__header {
        @extend .row;
        justify-content: space-between;
        width: 100%;
        height: 45px;
        background-color: white;

        .close-icon {
            color: white;
            width: 40px;
            height: 100%;
            background-color: rgb(97, 97, 97);
        }
    }
}
</style>
