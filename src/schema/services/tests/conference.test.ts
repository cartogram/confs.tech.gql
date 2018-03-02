import {Topic as TopicType, getConferences} from '../conference';
import {Topic} from '../../types';
 
describe('getConferences()', () => {
  it('returns conferences with the correct country', async () => {
    const country = 'Germany';
    const results = await getConferences({
      country,
      topic: TopicType.RUBY,
      year: 2018,
      first: 10,
    });

    results.forEach(conference => {
      expect(conference.country).toBe(country);
    });
  });

  it('returns conferences with the correct city', async () => {
    const city = 'Hamburg';
    const results = await getConferences({
      city,
      topic: TopicType.RUBY,
      year: 2018,
      first: 10,
    });

    results.forEach(conference => {
      expect(conference.city).toBe(city);
    });
  });
});
