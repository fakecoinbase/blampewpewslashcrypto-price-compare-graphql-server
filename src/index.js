
require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const CoinMarketCapAPI = require('./datasources/coinmarketcap');
const CryptoCompareAPI = require('./datasources/cryptocompare');

const server = new ApolloServer({
  context: {
    coinMarketCapUrl: process.env.COIN_MARKET_CAP_API_URL,
    coinMarketCapApiKey: process.env.COIN_MARKET_CAP_API_KEY,
    crypto_compare_api_key: process.env.CRYPTO_COMPARE_API_KEY
  },
  typeDefs,
  resolvers,
  dataSources: () => ({
    coinMarketCapAPI: new CoinMarketCapAPI(),
    cryptoCompareAPI: new CryptoCompareAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
