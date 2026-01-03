<template>
    <footer>
        <div class="container">
            <FooterTop />
            <Links />
            <PaymentCards />
            <FooterBottom />
        </div>
    </footer>
</template>

<script setup lang="ts">
import FooterBottom from './FooterBottom/FooterBottom.vue';
import Links from './Links/Links.vue';
import PaymentCards from './PaymentCards/PaymentCards.vue';
import FooterTop from './FooterTop.vue';
</script>

<style lang="scss" scoped>
footer {
    background-color: #f3f4f5;
}
</style>
