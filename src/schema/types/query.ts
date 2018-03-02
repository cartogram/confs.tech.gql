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

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query any Pokémon by number or name',
  fields: () => ({
    conferences: {
      type: new GraphQLList(Conference),
      args: {
        first: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        year: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        topic: {
          type: new GraphQLNonNull(Topic),
        },
      },
      resolve: async (obj, args: ConferenceOptions) => await getConferences(args)
    },
  }),
});

export default QueryType;