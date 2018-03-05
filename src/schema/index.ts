import { GraphQLSchema } from 'graphql';

import {Mutation, Query} from './types';

const schema = new GraphQLSchema({
  mutation: Mutation,
  query: Query,
});

export default schema;
