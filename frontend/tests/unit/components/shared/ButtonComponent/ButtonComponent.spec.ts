import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ButtonComponent from './../../../../../src/shared/ui/ButtonComponent/ButtonComponent.vue';
import {
    Button,
    Colors,
} from './../../../../../src/shared/ui/ButtonComponent/types';
import { hexToRgb } from '../../../../../src/shared/lib/workingWithColors/hexToRGB.lib';

const props: Button = {
    text: 'Тестовый текст',
    textColor: Colors.BLUE,
    bgColor: Colors.BLACK,
};

describe('ButtonComponent.vue', () => {
    it('Отображаются все переданные props (без необязательных полей)', () => {
        const wrapper = mount(ButtonComponent, { props });

        expect(wrapper.text()).toBe(props.text);

        expect(wrapper.attributes('style')).toContain(
            `color: ${hexToRgb(Colors.BLUE)}`,
        );
        expect(wrapper.attributes('style')).toContain(
            `background-color: ${hexToRgb(Colors.BLACK)}`,
        );
    });

    it('Отображается иконка у кнопки', () => {
        const propsWithIcon: Button = {
            ...props,
            icon: '/images/test.jpg',
        };
        const wrapper = mount(ButtonComponent, { props: propsWithIcon });

        expect(wrapper.get('img').attributes('src')).toBe(propsWithIcon.icon);
    });

    it('Отображается правильный border color', () => {
        const propsWithBorderColor: Button = {
            ...props,
            borderColor: Colors.LIGHT_BLUE,
        };
        const wrapper = mount(ButtonComponent, { props: propsWithBorderColor });

        expect(wrapper.attributes('style')).toContain(
            `border-color: ${hexToRgb(Colors.LIGHT_BLUE)}`,
        );
    });

    it('При выборе отображения "круглая кнопка", кнопка отображается круглой', () => {
        const propsWithIsRound: Button = {
            ...props,
            isRound: true,
        };
        const wrapper = mount(ButtonComponent, { props: propsWithIsRound });

        expect(wrapper.attributes('style')).toContain(`border-radius: 50%`);
    });
});
