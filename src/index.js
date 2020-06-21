
require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const CoinMarketCapAPI = require('./datasources/coinmarketcap');
const CryptoCompareAPI = require('./datasources/cryptocompare');
const CoinBaseAPI = require('./datasources/coinbase');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    coinMarketCapAPI: new CoinMarketCapAPI(),
    cryptoCompareAPI: new CryptoCompareAPI(),
    coinBaseAPI: new CoinBaseAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
