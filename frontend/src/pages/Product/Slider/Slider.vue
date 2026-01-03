<template>
    <div class="slider">
        <div v-if="canScrollUp" class="slider__prev-wrapper">
            <button
                class="slider__prev"
                @click="smoothScrollToActive(false)"
            ></button>
        </div>
        <div
            class="images"
            ref="thumbnailsContainer"
            @scroll="checkScrollButtons"
        >
            <img
                v-for="(img, index) in images"
                :key="img"
                :class="[
                    'images__img',
                    { 'images__img--active': index === mainImage },
                ]"
                :src="img"
                alt=""
                @click="setMainImg(index)"
            />
        </div>
        <div v-if="canScrollDown" class="slider__next-wrapper">
            <button class="slider__next" @click="smoothScrollToActive()" />
        </div>
        <div class="main-image">
            <div
                v-if="images.length && images[mainImage]"
                ref="mainImg"
                class="main-image__image"
                :style="{
                    backgroundImage: `url(${images[mainImage]})`,
                    ...mainImgStyle,
                }"
                alt=""
                @mousemove="resizeImg"
                @mouseleave="resetImg"
            />
            <div v-else class="main-image__placeholder">Нет изображения</div>
            <div class="main-image__resize" @click="openModal"></div>
        </div>
        <Modal
            v-if="productModalIsOpen"
            :aria-modal="productModalIsOpen"
            @close="closeModal"
        >
            <template #body>
                <img :src="images[mainImage]" />
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue';
import { useModalStore } from '@/entities/modal';
import { Modal } from '@/shared/ui';

const { images } = defineProps<{
    images: string[];
}>();

const modalStore = useModalStore();

const mainImage = ref(0);
const canScrollUp = ref(false);
const canScrollDown = ref(false);

const mainImgStyle = ref({
    backgroundSize: '100%',
    backgroundPosition: '100%',
});

const thumbnailsContainer = useTemplateRef('thumbnailsContainer');
const mainImg = useTemplateRef('mainImg');

const productModalIsOpen = computed(
    () => modalStore.isOpen && modalStore.type === 'product',
);

const setMainImg = (index: number) => {
    mainImage.value = index;
};

const openModal = () => {
    modalStore.isOpen = true;
    modalStore.type = 'product';
};

const closeModal = () => {
    modalStore.isOpen = false;
    modalStore.type = null;
};

const checkScrollButtons = () => {
    const container = thumbnailsContainer.value;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;

    canScrollUp.value = scrollTop > 10;
    canScrollDown.value = scrollTop < scrollHeight - clientHeight - 10;
};

const smoothScrollToActive = (isScrollBottom = true) => {
    const container = thumbnailsContainer.value;
    if (!container) return;

    container.scrollBy(0, isScrollBottom ? 60 : -60);
};

const resizeImg = (event: MouseEvent) => {
    if (mainImg.value) {
        const mainImgPosition = mainImg.value.getBoundingClientRect();

        const mouseOnImgCoordinates = {
            x: ((event.x - mainImgPosition.x) / mainImgPosition.width) * 100,
            y: ((event.y - mainImgPosition.y) / mainImgPosition.height) * 100,
        };

        mainImgStyle.value = {
            backgroundSize: '200%',
            backgroundPosition: `${mouseOnImgCoordinates.x}% ${mouseOnImgCoordinates.y}%`,
        };
    }
};

const resetImg = () => {
    mainImgStyle.value = {
        backgroundSize: '100%',
        backgroundPosition: '100%',
    };
};
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.slider {
    @extend .row;
    gap: 20px;

    position: relative;

    &__next-wrapper,
    &__prev-wrapper {
        position: absolute;
        bottom: -2px;

        width: 97px;
        height: 50px;

        background-image: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.5),
            white
        );

        z-index: 100;
    }

    &__prev-wrapper {
        top: -2px;

        background-image: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.5),
            white
        );
    }

    &__next,
    &__prev {
        width: 16px;
        height: 8px;

        position: absolute;
        left: 50%;
        bottom: 0;

        transform: translate(-50%, -50%);
        background-image: url('./assets/arrow.svg');
    }

    &__prev {
        top: 0;
        transform: rotateX(180deg) translate(-50%, -50%);
    }

    .images {
        @extend .column;
        gap: 20px;

        position: relative;

        max-height: 544px;
        overflow-y: auto;
        scrollbar-width: none;

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

            background-size: cover;
            background-position: 100%;
        }

        &__resize {
            position: absolute;
            content: '';
            left: 16px;
            top: 16px;

            width: 24px;
            height: 24px;

            background-image: url('./assets/resize.svg');
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
