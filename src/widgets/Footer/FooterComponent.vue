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
import FooterBottom from './FooterBottom.vue';
import FooterCards from './FooterCards.vue';
import FooterLinks from './FooterLinks.vue';
import FooterTop from './FooterTop.vue';
</script>

<style lang="scss" module>
footer {
    background-color: #f3f4f5;
}
</style>
