<template>
    <Suspense>
        <RouterView />
    </Suspense>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/entities/modal';

const modalStore = useModalStore();
const { isOpen } = storeToRefs(modalStore);

watch(isOpen, () => {
    if (isOpen.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});
</script>
