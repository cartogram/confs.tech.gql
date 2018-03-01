import * as fs from 'fs-extra';
import * as path from 'path';

enum TOPIC {
  JAVSCRIPT = 'javascript',
  GENERAL = 'general',
  ANDROID = 'android',
  PHP = 'php',
  CSS = 'css',
  SECURITY = 'security',
  RUBY = 'ruby',
  IOS = 'ios',
}

interface ConferenceOptions {
  country: string;
  year: number;
  topic: TOPIC;
}

async function getConferences({year, topic, country}: ConferenceOptions) {

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

  return results;
}

export const resolvers = {
  Query: {
    conferences: (_, {year, topic, country}) => getConferences(
    {
      country,
      topic,
      year,
   },
 )}};
