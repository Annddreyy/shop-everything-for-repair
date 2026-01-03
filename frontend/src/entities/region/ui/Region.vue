<template>
    <article class="region">
        <span class="region__city">{{ city }}</span>
        <span class="region__phone">{{ phone }}</span>
        <span class="region__email">{{ email }}</span>
    </article>
</template>

<script setup lang="ts">
import type { Region } from '../model/useRegions';

defineProps<Region>();
</script>
