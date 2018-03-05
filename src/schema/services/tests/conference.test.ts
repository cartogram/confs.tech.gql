import {Topic} from '../../types';
import {getConferences, Topic as TopicType} from '../conference';

describe('getConferences()', () => {
  it('returns the correct amount of conferences based on the `first` argument', async () => {
    const first = 1;
    const results = await getConferences({
      topic: TopicType.RUBY,
      year: 2018,
      first,
    });

    expect(results.edges).toHaveLength(first);
  });

  it('returns conferences with the correct country', async () => {
    const country = 'Germany';
    const results = await getConferences({
      country,
      topic: TopicType.RUBY,
      year: 2018,
      first: 10,
    });

    results.edges.forEach(conference => {
      expect(conference.node.country).toBe(country);
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

    results.edges.forEach(conference => {
      expect(conference.city).toBe(city);
    });
  });
});
