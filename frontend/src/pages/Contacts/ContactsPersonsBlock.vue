<template>
    <div class="container contact-persons-block">
        <div>
            <ContactPersons :contact-persons="contactPersons" />
        </div>
        <aside class="details">
            <h3 class="details__title">Реквизиты</h3>
            <p class="details__description">
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТРОЙОПТТОРГ"ИНН
                0901051787КПП 090101001369000, Карачаево-Черкесская республика,
                город Черкесск, Октябрьская улица, 301р/с 40702810360000102415 в
                Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615
            </p>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { ContactPersons } from '@/entities/contactPerson';
import type { ContactPerson } from '@/entities/contactPerson';

defineProps<{
    contactPersons: ContactPerson[];
}>();
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.contact-persons-block {
    @extend .grid;
    grid-template-columns: 8fr 2fr;
    gap: 20px;

    .details {
        @extend .column;
        gap: 5px;

        height: max-content;
        padding: 20px;

        background-color: #f7f9fc;

        &__title {
            font-size: 16px;
            color: #2b2e31;
        }

        &__description {
            font-size: 12px;
            color: #2c2f33;
        }
    }
}
</style>
