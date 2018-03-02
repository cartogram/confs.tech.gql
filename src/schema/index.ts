// import {makeExecutableSchema} from 'graphql-tools';

// import {resolvers} from './resolvers';
// import {typeDefs} from './typeDefs';

// export default makeExecutableSchema({
//   resolvers,
//   typeDefs,
// });


import { GraphQLSchema } from 'graphql';

import query from './types/query';

const schema = new GraphQLSchema({
  query
});

export default schema;
