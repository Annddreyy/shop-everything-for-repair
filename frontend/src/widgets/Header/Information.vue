<template>
    <div class="information">
        <time class="information__time"> Ежедневно с 8:00 до 18:00 </time>
        <span class="information__phone">8 800 444 00 65</span>
        <ButtonComponent
            text="Заказать звонок"
            :bg-color="Colors['GRAY']"
            :text-color="Colors['BLUE']"
            class="information__phone-button"
        />
    </div>
</template>

<script setup lang="ts">
import { Colors } from '@/shared/ui/ButtonComponent/types';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/display' as *;

.information {
    @extend .row-a-c;
    gap: 8px;

    &__time {
        color: #6c6f71;
        font-size: 12px;
    }

    &__phone {
        font-size: 14px;
    }

    &__phone-button {
        padding: 4px 12px;
        border-radius: 4px;
        * {
            font-size: 11px;
            font-weight: bold;
        }
    }
}
</style>
