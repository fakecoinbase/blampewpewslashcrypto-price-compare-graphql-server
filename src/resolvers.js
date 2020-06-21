module.exports = {
  Query: {
    coins: (_, __, { dataSources }) =>
      dataSources.coinMarketCapAPI.getLatestListings(),
    coinmarketcap: (_, { symbol }, { dataSources}) =>
      dataSources.coinMarketCapAPI.getCoinPriceBySymbol({ symbol: symbol }),
    cryptocompare: (_, { symbol }, { dataSources}) =>
      dataSources.cryptoCompareAPI.getCoinPriceBySymbol({ symbol: symbol }),
  }
};
