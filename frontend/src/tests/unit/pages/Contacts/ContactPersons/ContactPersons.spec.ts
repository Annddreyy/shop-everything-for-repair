import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ContactPersons } from '@/pages/Contacts/ui';
import { contactPersons } from '@/pages/Contacts/config';

describe('ContactPersons.vue', () => {
    it('Проверка отображения списка всех контактных лиц компании', () => {
        const wrapper = mount(ContactPersons);
        const contactPersonsComponents = wrapper.findAll('article');

        expect(contactPersonsComponents.length).toBe(contactPersons.length);

        contactPersonsComponents.forEach((c, index) => {
            expect(c.text()).toContain(contactPersons[index].jobTitle);
            expect(c.text()).toContain(contactPersons[index].phone);
            expect(c.text()).toContain(contactPersons[index].description || '');
        });
    });
});
