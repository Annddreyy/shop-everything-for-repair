import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import {
    CompareButton,
    FavoriteButton,
    CartButton,
    ProductCard,
} from '@/entities/product';
import type { Product } from '@/entities/product';
import { useLSStore } from '@/shared/model';
import { createPinia, setActivePinia } from 'pinia';

const props: Product = {
    id: 'fi93ksakf',
    title: 'Тестовый товар',
    img: '/images/test.jpg',
    price: 4350,
    article: 'Dkf2525-314',
    statuses: ['новинка', 'распродажа'],
};

describe('ProductCard.vue', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        localStorage.clear();
    });

    it('Отображаются все переданные props без скидки', () => {
        const wrapper = mount(ProductCard, { props });

        expect(wrapper.text()).toContain(props.title);
        expect(wrapper.text()).toContain(props.price);
        expect(wrapper.text()).toContain(props.article);
        expect(wrapper.text()).toContain(props.statuses[0]);
        expect(wrapper.text()).toContain(props.statuses[1]);

        expect(wrapper.get('img').attributes('src')).toBe(props.img);
    });

    it('Если есть promotion percent, то он отображается на карточке товара', () => {
        const wrapper = mount(ProductCard, {
            props: { ...props, promotionPercent: 20 },
        });
        expect(wrapper.text()).toContain(20);
        expect(wrapper.text()).toContain(props.price * 1.2);
    });

    it('Добавление товара в список избранных после нажатия на кнопку добавления товара в избранное', () => {
        const wrapper = mount(ProductCard, { props });
        const LSStore = useLSStore();
        expect(LSStore.compare).toHaveLength(0);

        const favoriteButton = wrapper.findComponent(FavoriteButton);
        favoriteButton.trigger('click');

        expect(LSStore.favorite).toHaveLength(1);
    });

    it('Добавление товара в корзину после нажатия на кнопку добавления товара в корзину', () => {
        const wrapper = mount(ProductCard, { props });
        const LSStore = useLSStore();
        expect(LSStore.bin).toHaveLength(0);

        const favoriteButton = wrapper.findComponent(CartButton);
        favoriteButton.trigger('click');

        expect(LSStore.bin).toHaveLength(1);
    });

    it('Добавление товара в списо для сравнения после нажатия на сравнения товара', () => {
        const wrapper = mount(ProductCard, { props });
        const LSStore = useLSStore();
        expect(LSStore.compare).toHaveLength(0);

        const favoriteButton = wrapper.findComponent(CompareButton);
        favoriteButton.trigger('click');

        expect(LSStore.compare).toHaveLength(1);
    });

    it('Удаления товара из списка избранных после повторного нажатия на кнопку добавления товара в избранное', () => {
        const wrapper = mount(ProductCard, { props });

        const favoriteButton = wrapper.findComponent(FavoriteButton);
        favoriteButton.trigger('click');
        favoriteButton.trigger('click');

        const LSStore = useLSStore();
        expect(LSStore.favorite).toHaveLength(0);
    });

    it('Удаления товара из корзины после повторного нажатия на кнопку добавления товара в корзину', () => {
        const wrapper = mount(ProductCard, { props });

        const favoriteButton = wrapper.findComponent(CartButton);
        favoriteButton.trigger('click');
        favoriteButton.trigger('click');

        const LSStore = useLSStore();
        expect(LSStore.bin).toHaveLength(0);
    });

    it('Удаления товара из списка сравнения после повторного нажатия на кнопку добавления товара в сравнение', () => {
        const wrapper = mount(ProductCard, { props });

        const favoriteButton = wrapper.findComponent(CompareButton);
        favoriteButton.trigger('click');
        favoriteButton.trigger('click');

        const LSStore = useLSStore();
        expect(LSStore.compare).toHaveLength(0);
    });
});
