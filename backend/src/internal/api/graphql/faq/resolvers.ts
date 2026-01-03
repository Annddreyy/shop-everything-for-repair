import { FAQRepository } from '@/internal/domain/faq';

export const faqResolvers = {
    faqs: async () => {
        return await FAQRepository.getFAQs();
    },
};
