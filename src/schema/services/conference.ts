import * as fs from 'fs-extra';
import * as path from 'path';

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
}

export async function getConferences({first, year, topic, country, city}: ConferenceOptions) {
  const basePath = process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, './home/nowuser/src/data')
    : 'data';

  let results;
  try {
    results = await fs.readJson(`${basePath}/conferences/${year}/${topic.toLocaleLowerCase()}.json`);
  } catch (err) {
    console.error(err);
  }

  results = results.slice(0, first);
  

  if (country) {
    results = results.filter(result => result.country === country);
  }

  if (city) {
    results = results.filter(result => result.city === city);
  }

  return results;
}