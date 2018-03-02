import * as fs from 'fs-extra';
import * as path from 'path';
import {
  convertCursorToNodeId,
  convertNodeToCursor,
} from '../types/pagination'

export enum Topic {
  JAVSCRIPT = 'javascript',
  GENERAL = 'general',
  ANDROID = 'android',
  PHP = 'php',
  CSS = 'css',
  SECURITY = 'security',
  RUBY = 'ruby',
  IOS = 'ios',
}

export interface ConferenceOptions {
  city?: string;
  country?: string;
  year: number;
  first: number;
  topic: Topic;
  after?: string,
}

export async function getConferences({after, first, year, topic, country, city}: ConferenceOptions) {
  const basePath = process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, './home/nowuser/src/data')
    : 'data';

  let results;
  let afterIndex: number = 0;

  try {
    results = await fs.readJson(`${basePath}/conferences/${year}/${topic.toLocaleLowerCase()}.json`);
  } catch (err) {
    console.error(err);
  }

  let name;
  if (after) {
    name = convertCursorToNodeId(after);
  }

  if (name) {
    const matchingIndex = results.findIndex(conf => conf.name === name);
    if (matchingIndex != -1) {
      afterIndex = matchingIndex;
    }
  }

  const sliceIndex = afterIndex + 1;

  if (country) {
    results = results.filter(result => result.country === country);
  }

  if (city) {
    results = results.filter(result => result.city === city);
  }

  const edges = results
    .slice(sliceIndex, sliceIndex + first)
    .map(node => ({
      node,
      cursor: convertNodeToCursor(node)
    }));

  const startCursor = edges.length > 0 ? convertNodeToCursor(edges[0].node) : null;
  const endCursor = edges.length > 0 ? convertNodeToCursor(edges[edges.length-1].node) : null;
  const hasNextPage = results.length > afterIndex + first;

  return {
    totalCount: results.length,
    edges,
    pageInfo: {
      startCursor,
      endCursor,
      hasNextPage
    }
  }
}