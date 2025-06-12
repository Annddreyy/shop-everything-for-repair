<template>
    <section :class="$style.cardsBlock">
        <div :class="$style.paymentCards">
            <span>Мы принимаем к оплате: </span>
            <div :class="$style.cards">
                <img :src="sberIcon" alt="" />
                <img :src="tinkoffIcon" alt="" />
                <img :src="mirIcon" alt="" />
                <img :src="visaIcon" alt="" />
                <img :src="xalvaIcon" alt="" />
            </div>
        </div>
        <div :class="$style.emailBlock">
            <span>Подпишитесь на рассылку и будьте в курсе!</span>
            <form :class="$style.form">
                <input type="email" name="email" id="email" placeholder="Ваш email">
                <button><img :src="sendEmail" alt="Отправить почту"></button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import sberIcon from './../../assets/images/footer/sber-icon.svg';
import tinkoffIcon from './../../assets/images/footer/tinkoff-icon.svg';
import mirIcon from './../../assets/images/footer/mir-icon.svg';
import visaIcon from './../../assets/images/footer/visa-icon.svg';
import xalvaIcon from './../../assets/images/footer/xalva-icon.svg';
import sendEmail from './../../assets/images/footer/send-email.svg';
</script>

<style module lang="scss">
@use './../../assets/scss/variables' as *;
@use './../../assets/scss/display' as *;

.cardsBlock {
    @extend .row-a-c;
    justify-content: space-between;
    padding: $base-padding-9 0;

    border-bottom: 1px solid #dce1e7;
    
    .paymentCards {
        @extend .row-a-c;
        gap: $base-gap-6;
        .cards {
            @extend .row-a-c;
            gap: $base-gap-3;
            img {
                filter:opacity(50%);
            }
        }
    }

    .emailBlock {
        @extend .row-a-c;
        span {
            width: 220px;
        }
        .form {
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
