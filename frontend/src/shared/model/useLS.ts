import { defineStore } from 'pinia';
import type { Product } from '@/entities/product';

type LSProduct = Product & { count: number };

export enum LSItemTypes {
    FAVORITE = 'favorite',
    COMPARE = 'compare',
    BIN = 'bin',
}

type ToggleItemInLSType =
    | {
          method: 'add';
          key: LSItemTypes;
          item: Product;
      }
    | {
          method: 'remove';
          key: LSItemTypes;
          id: keyof Product;
          value: string;
      };

type CheckItemExistsInLSType = {
    item: Product;
    key: LSItemTypes;
    id: keyof Product;
};

const getLSItemsByKey = (key: LSItemTypes) => {
    const items: LSProduct[] =
        JSON.parse(localStorage.getItem(key) || '') || [];
    return items;
};

export const toggleItemInLS = (params: ToggleItemInLSType) => {
    const LSStore = useLSStore();
    if (params.method === 'add') {
        LSStore.addItem(params.key, params.item);
    } else {
        LSStore.removeItem(params.key, params.id, params.value);
    }
};

export const checkItemExistsInLS = ({
    item,
    key,
    id,
}: CheckItemExistsInLSType) => {
    return getLSItemsByKey(key).some((el) => el[id] === item[id]);
};

export const useLSStore = defineStore('localStorage', {
    state: () => ({
        favorite: getLSItemsByKey(LSItemTypes.FAVORITE),
        compare: getLSItemsByKey(LSItemTypes.COMPARE),
        bin: getLSItemsByKey(LSItemTypes.BIN),
    }),

    actions: {
        addItem(key: LSItemTypes, item: Product) {
            this[key].push({ ...item, count: 1 });
            localStorage.setItem(key, JSON.stringify(this[key]));
        },

        removeItem(key: LSItemTypes, idField: keyof LSProduct, value: string) {
            this[key] = this[key].filter((el) => el[idField] !== value);
            localStorage.setItem(key, JSON.stringify(this[key]));
        },

        increaseItemCount(
            key: LSItemTypes,
            idField: keyof LSProduct,
            value: string,
        ) {
            const item = this[key].find((el) => el[idField] === value);
            if (item) {
                item.count += 1;
                localStorage.setItem(key, JSON.stringify(this[key]));
            }
        },

        decreaseItemCount(
            key: LSItemTypes,
            idField: keyof LSProduct,
            value: string,
        ) {
            const item = this[key].find((el) => el[idField] === value);
            if (item) {
                if (item.count > 1) {
                    item.count -= 1;
                    localStorage.setItem(key, JSON.stringify(this[key]));
                }
            }
        },

        toggleItem(key: LSItemTypes, item: LSProduct, idField = 'id' as const) {
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
            localStorage.removeItem(key);
        },
    },
});
