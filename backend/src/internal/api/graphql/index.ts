import { buildSchema } from 'graphql';
import { faqTypesDefs, faqResolvers } from './faq';

const baseTypeDefs = `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export const schema = buildSchema(`
    ${baseTypeDefs}
    ${faqTypesDefs}
`);

export const root = {
    ...faqResolvers,
};
