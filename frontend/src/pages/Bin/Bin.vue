<template>
    <BasePage title="Корзина товаров" :breadcrumbs="breadcrumbs">
        <div class="bin container">
            <div class="bin__left-part">
                <SumToDiscount
                    :discounts="discounts"
                    :discount-percent="discountPercent"
                    :current-sum="currentSum"
                />
                <ProductsTable />
            </div>
            <FinalForm
                :discount-percent="discountPercent"
                :full-sum="currentSum"
            />
        </div>
    </BasePage>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useLSStore } from '@/shared/model';
import BasePage from '../BasePage.vue';
import FinalForm from './FinalForm/FinalForm.vue';
import SumToDiscount from './SumToDiscount.vue';
import ProductsTable from './ProductsTable/ProductsTable.vue';

const LSStore = useLSStore();
const { bin } = storeToRefs(LSStore);

const breadcrumbs: Link[] = [
    { title: 'Стройопторг', link: '/' },
    { title: 'Корзина товаров', link: '/bin' },
];

const discounts = ref({
    3000: 5,
    7000: 10,
    20000: 15,
});

const discountPercent = computed(() => {
    let result = 0;
    for (let [price, discount] of Object.entries(discounts.value)) {
        if (currentSum.value >= +price) {
            result = discount;
        } else {
            break;
        }
    }
    return result;
});

const currentSum = computed(
    () =>
        +bin.value
            .reduce(
                (sum, binProduct) => sum + binProduct.price * binProduct.count,
                0,
            )
            .toFixed(2),
);
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.bin {
    @extend .row;
    gap: 20px;

    margin-bottom: 70px;

    &__left-part {
        flex: 1;
    }
}
</style>
