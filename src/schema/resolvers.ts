import * as fs from 'fs-extra';
import * as path from 'path';
import {TOPIC} from './types';

interface ConferenceOptions {
  city?: string;
  country?: string;
  year: number;
  topic: TOPIC;
}

async function getConferences({year, topic, country, city}: ConferenceOptions) {
  const basePath = process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, './home/nowuser/src/data')
    : 'data';

  let results;
  try {
    results = await fs.readJson(`${basePath}/conferences/${year}/${topic.toLocaleLowerCase()}.json`);
  } catch (err) {
    console.error(err);
  }

  if (country) {
    results = results.filter(result => result.country === country);
  }

  if (city) {
    results = results.filter(result => result.city === city);
  }

  return results;
}

export const resolvers = {
  Query: {
    conferences: (_, {year, topic, country, city}) => getConferences(
    {
      city,
      country,
      topic,
      year,
   },
 )}};
