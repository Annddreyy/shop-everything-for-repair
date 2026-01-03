<template>
    <Modal v-if="isOpen && type === 'orderCall'" @close="close">
        <div class="order-call">
            <h2 class="order-call__title">Заказать обратный звонок</h2>
            <form
                class="order-call__form"
                @submit.prevent="sendEmail"
                ref="form"
            >
                <FormGroup
                    type="text"
                    name="name"
                    id="name"
                    label="Ваше имя"
                    placeholder="Как к Вам обращаться?"
                    required
                />
                <FormGroup
                    type="phone"
                    name="phone"
                    id="phone"
                    label="Номер телефона"
                    placeholder="7 ( ) - - "
                    v-maska="'+7 (###) ###-##-##'"
                    required
                />
                <CheckboxField
                    id="personal-data"
                    name="personal-data"
                    label="Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности"
                />
                <BaseButton
                    class="order-call__button"
                    text="Перезвоните мне"
                    :bg-color="Colors.BLUE"
                    :text-color="Colors.WHITE"
                    type="submit"
                />
            </form>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import { useModalStore } from '@/entities/modal/model/useModal';
import {
    Modal,
    FormGroup,
    BaseButton,
    Colors,
    CheckboxField,
} from '@/shared/ui';
import { storeToRefs } from 'pinia';
import { vMaska } from 'maska/vue';
import { useTemplateRef } from 'vue';
import { instance } from '@/shared/api';

type FormData = {
    name: string;
    phone: string;
    ['personal-data']?: string;
};

const modalStore = useModalStore();
const { isOpen, type } = storeToRefs(modalStore);

const formRef = useTemplateRef('form');

const close = () => {
    modalStore.isOpen = false;
    modalStore.type = null;
};

const sendEmail = () => {
    if (!formRef.value) return;

    const formData = new FormData(formRef.value);
    const rawData = Object.fromEntries(formData.entries());

    const data: FormData = {
        name: (rawData.name as string) ?? '',
        phone: (rawData.phone as string) ?? '',
        'personal-data': (rawData['personal-data'] as string) ?? undefined,
    };

    if (
        data.name.trim().length >= 2 &&
        data.phone.replace(/\D/g, '').length === 11 &&
        data['personal-data'] === 'on'
    ) {
        instance.post('/email', {
            to: 'andreymail22112006@gmail.com',
            subject: 'Обратный звонок',
            html: `
            Имя: ${data.name},
            Телефон: ${data.phone}
            `,
        });
    } else {
        console.warn('Форма невалидна', data);
    }
};
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.order-call {
    @extend .column;
    gap: 25px;

    width: 618px;

    &__title {
        text-align: center;
        font-size: 33px;
        font-weight: 700;
    }

    &__form {
        @extend .column;
        gap: 25px;
    }

    &__button {
        width: 100%;
        padding: 25px 32px;
        border-radius: 8px;
        font-variant: small-caps;
        text-transform: uppercase;

        * {
            font-size: 13px;
        }
    }
}

:deep(.modal) {
    width: 618px;
}

:deep(.checkbox__label-text) {
    color: #696d70;
    font-size: 13px;
}
</style>
