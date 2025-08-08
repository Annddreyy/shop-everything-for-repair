import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CheckboxField from './../../../../../src/shared/ui/Forms/CheckboxField.vue';

describe('ChecboxField.vue', () => {
    it('Отображаются все переданные props', () => {
        const props: {
            id: string;
            name: string;
            label: string;
        } = {
            id: 'fjfpe93',
            name: 'test-name',
            label: 'Test label',
        };
        const wrapper = mount(CheckboxField, { props });

        expect(wrapper.text()).toBe(props.label);

        expect(wrapper.get('input').attributes('id')).toBe(props.id);
        expect(wrapper.get('input').attributes('name')).toBe(props.name);
    });
});
