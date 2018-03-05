import {GraphQLEnumType} from 'graphql';

export default new GraphQLEnumType({
  name: 'Topic',
  values: {
    JAVSCRIPT: { value: 'javascript' },
    PHP: { value: 'php' },
    RUBY: { value: 'ruby' },
    GENERAL: { value: 'general' },
    ANDROID: { value: 'android' },
    CSS: { value: 'css' },
    SECURITY: { value: 'security' },
    IOS: { value: 'ios' },
  },
});
