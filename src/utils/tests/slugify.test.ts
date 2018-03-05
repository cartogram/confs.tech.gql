import {slugify} from '../';

describe('slugify', () => {
  it('turns titles into slugs', () => {
    expect(slugify('2018-RubyConf')).toBe('2018-rubyconf');
    expect(slugify('2017-Great Indian Developer Summit')).toBe('2017-great-indian-developer-summit');
    expect(slugify('2016-!!Con')).toBe('2016-con');
  });
});
