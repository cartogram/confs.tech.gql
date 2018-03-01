export const typeDefs = `
  type Query {
    conferences(
      year: Int!,
      country: String,
      topic: TOPIC!
    ): [Conference]
  }
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
    country: String,
    twitter: String,
    startDate: String,
    endDate: String
  }
`;
