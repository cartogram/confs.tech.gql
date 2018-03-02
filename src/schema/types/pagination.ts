import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

export function Edge(itemType: any) {
  return new GraphQLObjectType({
    name: "Edge",
    description: "Generic edge to allow cursors",
    fields: () => ({
      node: { type: itemType },
      cursor: { type: GraphQLString }
    })
  });
}

export const PageInfo = new GraphQLObjectType({
  name: "PageInfo",
  description: "Information about current page",
  fields: () => ({
    startCursor: { type: GraphQLString },
    endCursor: { type: GraphQLString },
    hasNextPage: { type: GraphQLBoolean }
  })
});

export function Page(itemType: any) {
  return new GraphQLObjectType({
    name: "Page",
    description: "Page",
    fields: () => ({
      totalCount: { type: GraphQLInt },
      edges: { type: new GraphQLList(Edge(itemType)) },
      pageInfo: { type: PageInfo }
    })
  });
}

export function convertNodeToCursor(node: { name: string }): string {
  return bota(node.name);
}

export function bota(input: string): string {
  return new Buffer(input.toString(), 'binary').toString("base64");
}

export function convertCursorToNodeId(cursor: string): number {
  return parseInt(atob(cursor));
}

export function atob(input: string): string {
  return new Buffer(input, 'base64').toString('binary');
}