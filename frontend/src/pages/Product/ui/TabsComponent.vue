<template>
    <div class="tabs">
        <div class="tabs__buttons">
            <button
                @click="currentTab = Tabs.Characteristics"
                :class="[
                    'button',
                    { 'button--active': currentTab === Tabs.Characteristics },
                ]"
            >
                Характеристики
            </button>
            <button
                @click="currentTab = Tabs.AboutProduct"
                :class="[
                    'button',
                    { 'button--active': currentTab === Tabs.AboutProduct },
                ]"
            >
                О товаре
            </button>
            <button
                @click="currentTab = Tabs.Delivery"
                :class="[
                    'button',
                    { 'button--active': currentTab === Tabs.Delivery },
                ]"
            >
                Доставка и оплата
            </button>
        </div>
        <Characteristics v-if="currentTab === Tabs.Characteristics" />
        <AboutProduct v-else-if="currentTab === Tabs.AboutProduct" />
        <Delivery v-else />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Characteristics from './Tabs/CharacteristicsComponent.vue';
import AboutProduct from './Tabs/AboutProduct.vue';
import Delivery from './Tabs/DeliveryComponent.vue';

enum Tabs {
    Characteristics,
    AboutProduct,
    Delivery,
}
const currentTab = ref(Tabs.Characteristics);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display.scss' as *;

.tabs__buttons {
    @extend .row;
    gap: 25px;
    border-bottom: 1px solid #edf0f2;

    .button {
        padding: 25px 15px;

        color: #96999e;
        background-color: transparent;

        &--active {
            color: black;
            border-bottom: 1px solid #ee0906;
        }
    }
}
</style>
