<template>
    <section class="cards">
        <div class="payment-cards">
            <span>Мы принимаем к оплате: </span>
            <div class="payment-cards__images">
                <img :src="sberIcon" alt="Сбер" />
                <img :src="tinkoffIcon" alt="Тинькофф" />
                <img :src="mirIcon" alt="Картами МИР" />
                <img :src="visaIcon" alt="Картами VISA" />
                <img :src="xalvaIcon" alt="Картами Халва" />
            </div>
        </div>
        <div class="email-block">
            <span>Подпишитесь на рассылку и будьте в курсе!</span>
            <form class="email-block__form">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ваш email"
                />
                <button>
                    <img :src="sendEmailIcon" alt="Отправить почту" />
                </button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import {
    sberIcon,
    tinkoffIcon,
    mirIcon,
    visaIcon,
    xalvaIcon,
    sendEmailIcon,
} from '@/assets/images';
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;

.cards {
    @extend .row-a-c;
    justify-content: space-between;
    padding: $base-padding-9 0;

    border-bottom: 1px solid #dce1e7;

    .payment-cards {
        @extend .row-a-c;
        gap: $base-gap-6;

        &__images {
            @extend .row-a-c;
            gap: $base-gap-3;
            img {
                filter: opacity(50%);
            }
        }
    }

    .email-block {
        @extend .row-a-c;

        span {
            width: 220px;
        }

        &__form {
            @extend .row-a-c;
            justify-content: space-between;

            width: 430px;
            padding: 15px 20px;

            background-color: var(--white);

            input {
                font-size: 14px;
            }

            button {
                background-color: transparent;
            }
        }
    }
}
</style>
