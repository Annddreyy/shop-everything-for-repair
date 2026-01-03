<template>
    <BasePage :breadcrumbs="breadcrumbs" title="Страница не найдена">
        <div class="container">
            <section class="block-404">
                <img src="./assets/404.svg" alt="" class="block-404__img" />
                <p class="block-404__text">
                    Запрашиваемая страница не найдена. Возможно она была
                    удалена, либо её адрес был изменен. Попробуйте
                    воспользоваться поиском.
                </p>
                <div class="block-404__buttons">
                    <BaseButton
                        text="Вернуться назад"
                        :bg-color="Colors.GRAY"
                        :text-color="Colors.LIGHT_BLUE"
                        class="block-404__button"
                        @click="router.back()"
                    />
                    <RouterLink to="/">
                        <BaseButton
                            text="на главную"
                            :bg-color="Colors.BLUE"
                            :text-color="Colors.WHITE"
                            class="block-404__button"
                        />
                    </RouterLink>
                </div>
            </section>
        </div>
    </BasePage>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { BaseButton, Colors } from '@/shared/ui';
import { BasePage } from './..';

const router = useRouter();

const breadcrumbs: Link[] = [
    { link: '/', title: 'Стройоптторг' },
    { link: '/404', title: 'Страница не найдена' },
];
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.block-404 {
    @extend .column-a-c;
    gap: 55px;

    width: 727px;

    margin: auto;
    margin-top: 76px;
    margin-bottom: 105px;

    &__text {
        font-size: 18px;
        color: #535557;

        text-align: center;
    }

    &__buttons {
        @extend .row;
        gap: 15px;
    }

    &__button {
        width: 219px;
        padding: 22px 32px;

        border-radius: 8px;

        font-size: 13px;
        text-align: center;

        &:last-child {
            font-size: 15px;
        }
    }
}
</style>
