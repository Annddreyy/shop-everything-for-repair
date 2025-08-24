<template>
    <div class="modal">
        <div class="modal__overlay">
            <div class="modal__content">
                <div class="modal__header">
                    <slot name="header">
                        <div></div>
                    </slot>
                    <button @click="closeModal" class="close-icon">X</button>
                </div>
                <div class="modal__body">
                    <slot name="body"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

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

        background-color: #7e7e7ea0;
    }

    &__content {
        @extend .column;
        gap: 0;
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
