<template>
    <footer>
        <div class="container">
            <FooterTop />
            <FooterLinks />
            <FooterCards />
            <FooterBottom />
        </div>
    </footer>
</template>

<script setup lang="ts">
import FooterBottom from './Footer/FooterBottom.vue';
import FooterCards from './Footer/FooterCards.vue';
import FooterLinks from './Footer/FooterLinks.vue';
import FooterTop from './Footer/FooterTop.vue';
</script>

<style lang="scss" module>
footer {
    background-color: #f3f4f5;
}
</style>
