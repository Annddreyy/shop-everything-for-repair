import { defineStore } from 'pinia';

export type ModalType = 'product' | 'orderCall';

interface ModalState {
    isOpen: boolean;
    type: ModalType | null;
}

export const useModalStore = defineStore('modal', {
    state: (): ModalState => ({
        isOpen: false,
        type: null,
    }),

    actions: {
        open(type: ModalType) {
            this.type = type;
            this.isOpen = true;
        },

        close() {
            this.isOpen = false;
            this.type = null;
        },
    },
});
