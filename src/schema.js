const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
  type Query {
    coinsMarketCapListing: [Coin]
    cryptoCompareListing: [Coin]
    coinmarketcap(symbol: String!): Price
    cryptocompare(symbol: String!): Price
  }

  type Coin {
    id: ID!
    name: String
    symbol: String
    rank: Int
    price: Price
  }

  type Price {
    currency: String
    value: Float
  }
`;

module.exports = typeDefs;
