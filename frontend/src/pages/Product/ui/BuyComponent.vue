<template>
    <section class="buy">
        <span>Артикул: {{ article }}</span>
        <span>{{ count > 0 ? 'В наличии' : 'Нет в наличии' }}</span>
        <div class="price-block">
            <span>{{ price }}</span>
            <span v-if="promotionPercent">{{
                price * (1 - promotionPercent / 100)
            }}</span>
            <span v-if="promotionPercent">-{{ promotionPercent }}%</span>
        </div>
        <div class="count-block">
            <span>Количество:</span>
            <div class="buttons">
                <button>-</button>
                <span>{{ countToBuy }}</span>
                <button>+</button>
            </div>
        </div>
        <ButtonComponent
            text="Добавить в корзину"
            :text-color="Colors.WHITE"
            :bg-color="Colors.BLUE"
        />
        <ButtonComponent
            text="Купить в один клик"
            :text-color="Colors.BLUE"
            :bg-color="Colors.GRAY"
        />
    </section>
</template>

<script setup lang="ts">
import { ButtonComponent } from '@/shared/ui';
import { Colors } from '@/shared/ui/ButtonComponent/types';
import { ref } from 'vue';

defineProps<{
    article: string;
    price: number;
    promotionPercent?: number;
    count: number;
}>();

const countToBuy = ref(1);
</script>
