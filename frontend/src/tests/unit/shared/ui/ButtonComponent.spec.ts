import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ButtonComponent } from '@/shared/ui';
import { Colors, type Button } from '@/shared/ui/ButtonComponent/types';
import { hexToRGB } from '@/shared/lib';

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
            `color: ${hexToRGB(Colors.BLUE)}`,
        );
        expect(wrapper.attributes('style')).toContain(
            `background-color: ${hexToRGB(Colors.BLACK)}`,
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
            `border-color: ${hexToRGB(Colors.LIGHT_BLUE)}`,
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
