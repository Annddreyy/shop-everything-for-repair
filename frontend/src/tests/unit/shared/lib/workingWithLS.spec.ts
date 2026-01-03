import { toggleItemInLS } from '@/shared/libs/localStorage';
import {
    checkItemExistsInLS,
    getLSItemsByKey,
    LSItemTypes,
    type ToggleItemInLSType,
} from '@/shared/libs/localStorage/workingWithLS';
import { createPinia, setActivePinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Working with Local storage', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        localStorage.clear();
    });

    it('Добавление товара в список избранных', () => {
        const params: ToggleItemInLSType = {
            method: 'add',
            key: LSItemTypes.FAVORITE,
            item: { id: '1', title: 'test' },
        };
        toggleItemInLS(params);
        expect(
            checkItemExistsInLS({
                item: params.item,
                id: 'id',
                key: params.key,
            }),
        );
    });

    it('Удаление товара из списка избранных', () => {
        const addParams: ToggleItemInLSType = {
            method: 'add',
            key: LSItemTypes.FAVORITE,
            item: { id: '1', title: 'test' },
        };
        toggleItemInLS(addParams);
        expect(getLSItemsByKey(LSItemTypes.FAVORITE).length).toBe(1);

        const removeParams: ToggleItemInLSType = {
            method: 'remove',
            key: LSItemTypes.FAVORITE,
            id: 'id',
            value: '1',
        };
        toggleItemInLS(removeParams);
        expect(getLSItemsByKey(LSItemTypes.FAVORITE).length).toBe(0);
    });
});
