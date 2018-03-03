import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import {Conference} from './';
import {Conference as ConferenceType, addConference} from '../services/conference'

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addConference: {
      type: Conference,
      args: {
        name: {
          type: GraphQLString,
        },
        year: {
          type: GraphQLInt,
        },
        twitter: {
          type: GraphQLString,
        },
        url: {
          type: GraphQLString,
        },
        startDate: {
          type: GraphQLString,
        },
        endDate: {
          type: GraphQLString,
        },
        city: {
          type: GraphQLString,
        },
        country: {
          type: GraphQLString,
        },
        cfpUrl: {
          type: GraphQLString,
        },
        cfpEndDate: {
          type: GraphQLString,
        }
      },
      resolve: async (obj, args:ConferenceType) => await addConference(args)    }
  })
});

export default MutationType;
  