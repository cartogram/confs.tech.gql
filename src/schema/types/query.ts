import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {fromGlobalId} from 'graphql-relay';

import {ConferenceOptions, getConferences} from '../services/conference';
import {Conference, Topic} from './';
import {Page} from './pagination';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query conferences',
  fields: () => ({
    conferences: {
      type: Page(Conference),
      args: {
        first: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Limits the number of results returned',
        },
        after: {
          type: GraphQLString,
          description: 'The cursor value of an item returned in previous page.',
        },
        year: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        topic: {
          type: new GraphQLNonNull(Topic),
        },
        country: {
          type: GraphQLString,
        },
        city: {
          type: GraphQLString,
        },
      },
      resolve: async (obj, args: ConferenceOptions) => await getConferences(args),
    },
  }),
});

export default QueryType;
