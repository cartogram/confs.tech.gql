import { GraphQLSchema } from 'graphql';

import {Query, Mutation} from './types';

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default schema;
