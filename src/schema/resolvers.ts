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
  year: number;
  topic: TOPIC;
}

async function getConferences({year, topic}: ConferenceOptions) {

  const basePath = process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, './home/nowuser/src/data')
    : 'data';

  try {
    return await fs.readJson(`${basePath}/conferences/${year}/${topic.toLocaleLowerCase()}.json`);
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
