export const faqTypesDefs = `
    type FAQ {
        id: ID!
        question: String!
        answer: String!
    }

    input FAQInput {
        question: String!
        answer: String!
    }

    extend type Query {
        faqs: [FAQ]
        faq(id: ID!): FAQ
    }

    extend type Mutation {
        createFAQ(input: FAQInput!): FAQ
        updateFAQ(id: ID!, input: FAQInput!): FAQ
        deleteFAQ(id: ID!): Boolean
    }
`;
