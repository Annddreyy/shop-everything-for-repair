<template>
    <section class="footer-top">
        <img :src="companyLogo" alt="" />
        <span class="footer-top__company">ООО "Стройотпторг"</span>
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
        <div class="footer-top__time-block">
            <span class="footer-top__phone">8 800 444 00 65</span>
            <span>Ежедневно, с 8:00 до 18:00</span>
        </div>
        <button class="footer-top__order-call">Заказать звонок</button>
    </section>
</template>

<script setup lang="ts">
import { companyLogo } from '@/shared/assets';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/display' as *;

.footer-top {
    @extend .row-a-c;
    justify-content: space-between;

    padding: $base-padding-9 0;
    border-bottom: 1px solid #dce1e7;

    &__company {
        font-size: var(--fz-small);
    }

    &__details-block,
    &__email-block,
    &__time-block {
        @extend .column;
    }

    &__detailsBlock,
    &__email-block,
    &__time-block {
        span {
            font-size: var(--fz-small);
        }
    }

    &__email-title {
        font-weight: bold;
    }

    &__email {
        color: #117fe3;
        font-size: 14px;
        text-decoration: underline;
    }

    &__phone {
        font-size: var(--fz-large);
        font-weight: bolder;
    }

    &__order-call {
        border: 1px solid var(--error);
        border-radius: $base-border-radius;
        padding: 16px 28px;
        color: #474b4e;
    }
}
</style>
