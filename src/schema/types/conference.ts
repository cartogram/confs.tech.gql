import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
} from 'graphql';

import {globalIdField} from 'graphql-relay';

import {slugify} from '../../utils';

const Conference = new GraphQLObjectType({
  name: 'Conference',
  description: 'Represents a Conference',
  fields: () => ({
    id: globalIdField('Conference'),
    name: {
      type: GraphQLString,
      description: 'The name of this Conference',
      resolve: obj => obj.name,
    },
    slug: {
      type: GraphQLString,
      description: 'A generated slug based on the Conference name and year',
      resolve: obj => slugify(obj.name)
    },
    twitter: {
      type: GraphQLString,
      resolve: obj => obj.twitter
    },
    url: {
      type: GraphQLString,
      resolve: obj => obj.url
    },
    startDate: {
      type: GraphQLString,
      resolve: obj => obj.startDate
    },
    endDate: {
      type: GraphQLString,
      resolve: obj => obj.endDate
    },
    city: {
      type: GraphQLString,
      resolve: obj => obj.city
    },
    country: {
      type: GraphQLString,
      resolve: obj => obj.country
    },
    cfpUrl: {
      type: GraphQLString,
      resolve: obj => obj.cfpUrl
    },
    cfpEndDate: {
      type: GraphQLString,
      resolve: obj => obj.cfpEndDate
    }
  }),
});

export default Conference;