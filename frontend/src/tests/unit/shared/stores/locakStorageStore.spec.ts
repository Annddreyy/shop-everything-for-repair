import { useLSStore } from '@/shared/model';
import { LSItemTypes } from '@/shared/model/useLS';
import { createPinia, setActivePinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Local Storage Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        localStorage.clear();
    });

    it('Если в local storage нет объектов, то возвращается []', () => {
        const LSStore = useLSStore();
        expect(LSStore.favorite).toStrictEqual([]);
    });

    it('После добавления элемента в local storage, state store обновляется', () => {
        const LSStore = useLSStore();
        LSStore.addItem(LSItemTypes.FAVORITE, { id: '1', title: 'test' });
        expect(LSStore.favorite).toHaveLength(1);
    });

    it('После удаления элемента из local storage, state store обновляется', () => {
        const LSStore = useLSStore();
        LSStore.addItem(LSItemTypes.FAVORITE, { id: '1', title: 'test' });
        expect(LSStore.favorite).toHaveLength(1);
        LSStore.removeItem(LSItemTypes.FAVORITE, 'id', '1');
        expect(LSStore.favorite).toHaveLength(0);
    });

    it('После выполения функции clear', () => {
        const LSStore = useLSStore();
        LSStore.addItem(LSItemTypes.FAVORITE, { id: '1', title: 'test1' });
        LSStore.addItem(LSItemTypes.FAVORITE, { id: '2', title: 'test2' });
        expect(LSStore.favorite).toHaveLength(2);

        LSStore.clear(LSItemTypes.FAVORITE);
        expect(LSStore.favorite).toHaveLength(0);
        expect(localStorage.getItem(LSItemTypes.FAVORITE)).toBe(null);
    });

    it('Изменение состояния включения объекта в local storage', () => {
        const LSStore = useLSStore();
        LSStore.toggleItem(LSItemTypes.FAVORITE, { id: '1', title: 'test' });
        expect(LSStore.favorite).toHaveLength(1);

        LSStore.toggleItem(LSItemTypes.FAVORITE, { id: '1', title: 'test' });
        expect(LSStore.favorite).toHaveLength(0);
    });
});
