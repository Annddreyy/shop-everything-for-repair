import { defineStore } from 'pinia';

type Item = Record<string, string>;

export enum LSItemTypes {
    FAVORITE = 'favorite',
    COMPARE = 'compare',
    BIN = 'bin',
}

const getItems = (key: string): Item[] => {
    try {
        return JSON.parse(localStorage.getItem(key) || '[]');
    } catch {
        return [];
    }
};

export const useLSStore = defineStore('localStorage', {
    state: () => ({
        favorite: getItems(LSItemTypes.FAVORITE),
        compare: getItems(LSItemTypes.COMPARE),
        bin: getItems(LSItemTypes.BIN),
    }),
    actions: {
        addItem(key: LSItemTypes, item: Item) {
            this[key].push(item);
            localStorage.setItem(key, JSON.stringify(this[key]));
        },
        removeItem(key: LSItemTypes, idField: string, value: string) {
            this[key] = this[key].filter((el) => el[idField] !== value);
            localStorage.setItem(key, JSON.stringify(this[key]));
        },
        toggleItem(key: LSItemTypes, item: Item, idField = 'id') {
            const exists = this[key].some(
                (el) => el[idField] === item[idField],
            );
            if (exists) {
                this.removeItem(key, idField, item[idField]);
            } else {
                this.addItem(key, item);
            }
        },
        clear(key: LSItemTypes) {
            this[key] = [];
            localStorage.setItem(key, '[]');
        },
    },
});
