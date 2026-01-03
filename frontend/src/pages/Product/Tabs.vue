<template>
    <div class="tabs">
        <div class="tabs__buttons">
            <button
                @click="currentTab = Tabs.Characteristics"
                :class="[
                    'tabs__button',
                    {
                        'tabs__button--active':
                            currentTab === Tabs.Characteristics,
                    },
                ]"
            >
                Характеристики
            </button>
            <button
                @click="currentTab = Tabs.AboutProduct"
                :class="[
                    'tabs__button',
                    {
                        'tabs__button--active':
                            currentTab === Tabs.AboutProduct,
                    },
                ]"
            >
                О товаре
            </button>
            <button
                @click="currentTab = Tabs.Delivery"
                :class="[
                    'tabs__button',
                    { 'tabs__button--active': currentTab === Tabs.Delivery },
                ]"
            >
                Доставка и оплата
            </button>
        </div>
        <KeepAlive>
            <component :is="tabComponents[currentTab]" :key="currentTab" />
        </KeepAlive>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Characteristics from './Tabs/Characteristics.vue';
import AboutProduct from './Tabs/AboutProduct.vue';
import Delivery from './Tabs/Delivery.vue';

enum Tabs {
    Characteristics,
    AboutProduct,
    Delivery,
}

const tabComponents = {
    [Tabs.Characteristics]: Characteristics,
    [Tabs.AboutProduct]: AboutProduct,
    [Tabs.Delivery]: Delivery,
};

const currentTab = ref(Tabs.Characteristics);
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.tabs {
    &__buttons {
        @extend .row;
        gap: 25px;
        border-bottom: 1px solid #edf0f2;
    }

    &__button {
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
