import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { Bottom } from '@/widgets/Header';
import { useLSStore } from '@/shared/model';
import { LSItemTypes } from '@/shared/model/useLS';
import { nextTick } from 'vue';

const baseButtonClass = '.buttons__button';
const counterClass = '.counter';

const generateButtonClass = (type: string) =>
    `${baseButtonClass}--${type} > ${counterClass}`;

describe('Bottom.vue', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Не отображается число избранных товаров, если в LS их нет', () => {
        const LSStore = useLSStore();
        const wrapper = mount(Bottom);

        LSStore.clear(LSItemTypes.FAVORITE);

        expect(
            wrapper.findComponent(generateButtonClass('like')).exists(),
        ).toBeFalsy();
    });

    it('Не отображается число товаров в корзине, если в LS их нет', () => {
        const LSStore = useLSStore();
        const wrapper = mount(Bottom);

        LSStore.clear(LSItemTypes.BIN);

        expect(
            wrapper.findComponent(generateButtonClass('bin')).exists(),
        ).toBeFalsy();
    });

    it('Не отображается число товаров в списке для сравнения, если в LS их нет', () => {
        const LSStore = useLSStore();
        const wrapper = mount(Bottom);

        LSStore.clear(LSItemTypes.COMPARE);

        expect(
            wrapper.findComponent(generateButtonClass('compare')).exists(),
        ).toBeFalsy();
    });

    it('Отображается 1 товар в списке избранных, после добавления его в LS', async () => {
        const wrapper = mount(Bottom);

        const LSStore = useLSStore();
        LSStore.clear(LSItemTypes.FAVORITE);
        LSStore.addItem(LSItemTypes.FAVORITE, { id: '1', title: 'test' });

        await nextTick();

        const counterElem = wrapper.find(generateButtonClass('like'));
        expect(counterElem.exists()).toBeTruthy();
        expect(counterElem.text()).toBe('1');
    });

    it('Отображается 1 товар в корзине, после добавления его в LS', async () => {
        const wrapper = mount(Bottom);

        const LSStore = useLSStore();
        LSStore.clear(LSItemTypes.BIN);
        LSStore.addItem(LSItemTypes.BIN, { id: '1', title: 'test' });

        await nextTick();

        const counterElem = wrapper.find(generateButtonClass('bin'));
        expect(counterElem.exists()).toBeTruthy();
        expect(counterElem.text()).toBe('1');
    });

    it('Отображается 1 товар в списке для сравнения, после добавления его в LS', async () => {
        const wrapper = mount(Bottom);

        const LSStore = useLSStore();
        LSStore.clear(LSItemTypes.COMPARE);
        LSStore.addItem(LSItemTypes.COMPARE, { id: '1', title: 'test' });

        await nextTick();

        const counterElem = wrapper.find(generateButtonClass('compare'));
        expect(counterElem.exists()).toBeTruthy();
        expect(counterElem.text()).toBe('1');
    });
});
