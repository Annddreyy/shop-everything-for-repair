<template>
    <section :class="$style.top">
        <img :src="logo" alt="" />
        <span :class="$style.company">ООО "Стройотпторг"</span>
        <div :class="$style.detailsBlock">
            <span>ИНН: 0901051787</span>
            <span>КПП: 090101001</span>
        </div>
        <div :class="$style.emailBlock">
            <span :class="$style.emailTitle">Email:</span>
            <a :class="$style.email" href="mailto:info@stroiopttorg.ru"
                >info@stroiopttorg.ru</a
            >
        </div>
        <div :class="$style.timeBlock">
            <span :class="$style.phone">8 800 444 00 65</span>
            <span>Ежедневно, с 8:00 до 18:00</span>
        </div>
        <button :class="$style.orderCall">Заказать звонок</button>
    </section>
</template>

<script setup lang="ts">
import logo from './../../assets/images/logo.svg';
</script>

<style lang="scss" module>
@use './../../assets/scss/variables' as *;
@use './../../assets/scss/display' as *;

.top {
    @extend .row-a-c;
    justify-content: space-between;

    padding: $base-padding-9 0;
    border-bottom: 1px solid #dce1e7;

    .company {
        font-size: var(--fz-small);
    }

    .detailsBlock,
    .emailBlock,
    .timeBlock {
        @extend .column;
    }

    .detailsBlock,
    .emailBlock,
    .timeBlock {
        span {
            font-size: var(--fz-small);
        }
    }

    .emailBlock {
        .emailTitle {
            font-weight: bold;
        }
        .email {
            color: #117fe3;
            font-size: 14px;
            text-decoration: underline;
        }
    }

    .timeBlock {
        .phone {
            font-size: var(--fz-large);
            font-weight: bolder;
        }
    }

    .orderCall {
        border: 1px solid var(--error);
        border-radius: $base-border-radius;
        padding: 16px 28px;
        color: #474b4e;
    }
}
</style>
