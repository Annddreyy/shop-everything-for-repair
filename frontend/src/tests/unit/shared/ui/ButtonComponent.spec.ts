import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { BaseButton, Colors } from '@/shared/ui';
import type { Button } from '@/shared/ui';
import { hexToRGB } from '@/shared/libs/ui';

const props: Button = {
    text: 'Тестовый текст',
    textColor: Colors.BLUE,
    bgColor: Colors.BLACK,
};

describe('BaseButton.vue', () => {
    it('Отображаются все переданные props (без необязательных полей)', () => {
        const wrapper = mount(BaseButton, { props });

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
        const wrapper = mount(BaseButton, { props: propsWithIcon });

        expect(wrapper.get('img').attributes('src')).toBe(propsWithIcon.icon);
    });

    it('Отображается правильный border color', () => {
        const propsWithBorderColor: Button = {
            ...props,
            borderColor: Colors.LIGHT_BLUE,
        };
        const wrapper = mount(BaseButton, { props: propsWithBorderColor });

        expect(wrapper.attributes('style')).toContain(
            `border-color: ${hexToRGB(Colors.LIGHT_BLUE)}`,
        );
    });

    it('При выборе отображения "круглая кнопка", кнопка отображается круглой', () => {
        const propsWithIsRound: Button = {
            ...props,
            isRound: true,
        };
        const wrapper = mount(BaseButton, { props: propsWithIsRound });

        expect(wrapper.attributes('style')).toContain(`border-radius: 50%`);
    });
});
