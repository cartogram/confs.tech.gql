export const typeDefs = `
  type Query { conferences(year: Int!, topic: TOPIC!): [Conference] }
  enum TOPIC {
    JAVSCRIPT
    GENERAL
    ANDROID
    PHP
    CSS
    SECURITY
    RUBY
    IOS
  }
  type Conference {
    name: String,
    url: String,
    cfpEndDate: String,
    cfpUrl: String,
    city: String,
    country: String
  }
`;
