import {resolvers} from '../resolvers';
import {TOPIC} from '../types';

describe('resolvers', () => {
  it('returns conferences with the correct country', async () => {
    const country = 'Germany';
    const results = await resolvers.Query.conferences(null, {
      country,
      topic: TOPIC.RUBY,
      year: 2018,
    });

    results.forEach(conference => {
      expect(conference.country).toBe(country);
    });
  });

  it('returns conferences with the correct city', async () => {
    const city = 'Hamburg';
    const results = await resolvers.Query.conferences(null, {
      city,
      topic: TOPIC.RUBY,
      year: 2018
    });

    results.forEach(conference => {
      expect(conference.city).toBe(city);
    });
  });
});
