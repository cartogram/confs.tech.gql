import * as fs from 'fs-extra';

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
  year: number;
  topic: TOPIC;
}

async function getConferences({year, topic}: ConferenceOptions) {
  try {
    return await fs.readJson(`data/conferences/${year}/${topic}.json`);
  } catch (err) {
    console.error(err);
  }
}

export const resolvers = {
  Query: {
    conferences: (_, {year, topic}) => getConferences(
    {
      topic,
      year,
   },
 )}};
