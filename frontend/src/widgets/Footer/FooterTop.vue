<template>
    <section class="footer-top">
        <div class="footer-top__company">
            <img :src="companyLogo" alt="" />
            <span class="footer-top__company-title">ООО "Стройотпторг"</span>
        </div>
        <div class="footer-top__information">
            <div class="footer-top__details-block">
                <span>ИНН: 0901051787</span>
                <span>КПП: 090101001</span>
            </div>
            <div class="footer-top__email-block">
                <span class="footer-top__email-title">Email:</span>
                <a class="footer-top__email" href="mailto:info@stroiopttorg.ru">
                    info@stroiopttorg.ru
                </a>
            </div>
            <div class="footer-top__time">
                <div class="footer-top__time-block">
                    <span class="footer-top__phone">8 800 444 00 65</span>
                    <span>Ежедневно, с 8:00 до 18:00</span>
                </div>
                <button class="footer-top__order-call">Заказать звонок</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { companyLogo } from '@/shared/ui/assets';
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.footer-top {
    @extend .row-a-c;
    justify-content: space-between;

    padding: 41px 0;
    border-bottom: 1px solid #dce1e7;

    &__company {
        @extend .row-a-c;
        gap: 51px;
    }

    &__company-title {
        font-size: 13px;
    }

    &__information {
        @extend .row-a-c;
        gap: 147px;
    }

    &__details-block {
        * {
            font-size: 13px;
        }
    }

    &__details-block,
    &__email-block,
    &__time-block {
        @extend .column;
        gap: 0;

        * {
            font-size: 13px;
        }
    }

    &__email {
        color: #117fe3;
        font-size: 14px;
        text-decoration: underline;
    }

    &__time {
        @extend .row-a-c;
        gap: 34px;

        span {
            &:last-of-type {
                color: #4e5760;
            }
        }
    }

    &__phone {
        font-size: 21px;
    }

    &__order-call {
        width: 214px;
        border: 1px solid var(--error);
        border-radius: 4px;
        padding: 14px 26px;
        color: #474b4e;
        font-size: 12px;
        text-transform: uppercase;
    }
}
</style>
