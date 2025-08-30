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
import { FooterTop, FooterLinks, FooterCards, FooterBottom } from './Footer';
</script>

<style lang="scss" module>
footer {
    background-color: #f3f4f5;
}
</style>
