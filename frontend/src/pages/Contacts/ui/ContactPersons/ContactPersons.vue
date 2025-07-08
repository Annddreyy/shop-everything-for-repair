<template>
    <div class="container">
        <section class="contact-persons">
            <div class="contact-persons__list">
                <article
                    class="contact-person"
                    v-for="contact in contactPersons"
                    :key="contact.jobTitle"
                >
                    <p class="contact-person__title">{{ contact.jobTitle }}</p>
                    <p class="contact-person__phone">
                        {{ contact.phone
                        }}{{
                            contact.description && `(${contact.description})`
                        }}
                    </p>
                </article>
            </div>
            <aside class="details">
                <h3 class="details__title">Реквизиты</h3>
                <p class="details__description">
                    ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТРОЙОПТТОРГ"ИНН
                    0901051787КПП 090101001369000, Карачаево-Черкесская
                    республика, город Черкесск, Октябрьская улица, 301р/с
                    40702810360000102415 в Ставропольское отделение №5230 ПАО
                    Сбербанк, БИК 040702615
                </p>
            </aside>
        </section>
    </div>
</template>

<script setup lang="ts">
import { contactPersons } from '../../config/contact_persons';
</script>

<style lang="scss" scoped>
@use './../../../../assets/scss/display' as *;

.contact-persons {
    @extend .grid;
    grid-template-columns: 8fr 2fr;
    gap: 23px;

    &__list {
        @extend .grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;

        .contact-person {
            @extend .column;
            gap: 15px;

            padding: 30px 25px;

            border: 1px solid #f2f4f6;
            border-radius: 8px;

            &__title {
                font-size: 15px;
                color: #494d52;
            }

            &__phone {
                font-size: 18px;
                font-style: medium;
                color: #2f3134;
            }
        }
    }

    .details {
        @extend .column;
        gap: 5px;
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
