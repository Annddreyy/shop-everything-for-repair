<template>
    <div class="slider">
        <div class="images">
            <img
                v-for="(img, index) in images"
                :key="img"
                :src="img"
                alt=""
                :class="[
                    'images__img',
                    { 'images__img--active': index === mainImage },
                ]"
                @click="setMainImg(index)"
            />
        </div>
        <div class="main-image">
            <img
                v-if="images.length && images[mainImage]"
                class="main-image__image"
                :src="images[mainImage]"
                alt=""
            />
            <div v-else class="main-image__placeholder">Нет изображения</div>
            <div class="main-image__resize" @click="openModal"></div>
        </div>
        <Modal v-if="modalIsOpen" :aria-modal="modalIsOpen" @close="closeModal">
            <template #body>
                <img :src="images[mainImage]" />
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import Modal from '@/shared/ui/Modal/ModalComponent.vue';
import { ref } from 'vue';

const { images } = defineProps<{
    images: string[];
}>();

const mainImage = ref(0);
const modalIsOpen = ref(false);

const setMainImg = (index: number) => {
    mainImage.value = index;
};

const openModal = () => {
    modalIsOpen.value = true;
};

const closeModal = () => {
    modalIsOpen.value = false;
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

.slider {
    @extend .row;
    gap: 20px;

    .images {
        @extend .column;
        gap: 20px;

        max-height: 544px;
        overflow-y: hidden;

        &__img {
            width: 97px;
            height: 74px !important;
            object-fit: cover;
            cursor: pointer;

            &--active {
                border: 2px solid #186fd4;
                border-radius: 6px;
            }
        }
    }

    .main-image {
        position: relative;
        width: 683px;
        height: 544px;

        &__image {
            width: 100%;
            height: 100%;
        }

        &__resize {
            position: absolute;
            content: '';
            left: 16px;
            top: 16px;
            width: 24px;
            height: 24px;
            background-image: url('./../../../../assets/images/resize.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-color: white;
            padding: 4px;
            border-radius: 2px;
            cursor: pointer;
        }
    }
}
</style>
