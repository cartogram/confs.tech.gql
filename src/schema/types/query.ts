import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import {fromGlobalId} from 'graphql-relay';

import {Conference, Topic} from './';
import {ConferenceOptions, getConferences} from '../services/conference'
import {Page} from './pagination';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query any Pokémon by number or name',
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
          description: 'The cursor value of an item returned in previous page.'
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
        }
      },
      resolve: async (obj, args: ConferenceOptions) => await getConferences(args)
    },
  }),
});

export default QueryType;