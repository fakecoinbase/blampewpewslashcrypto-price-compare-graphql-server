module.exports = {
  Query: {
    coinsMarketCapListing: (_, __, { dataSources }) =>
      dataSources.coinMarketCapAPI.getLatestListings(),
    cryptoCompareListing: (_, __, { dataSources }) =>
      dataSources.cryptoCompareAPI.getLatestListings(),
    coinmarketcap: (_, { symbol }, { dataSources}) =>
      dataSources.coinMarketCapAPI.getCoinPriceBySymbol({ symbol: symbol }),
    cryptocompare: (_, { symbol }, { dataSources}) =>
      dataSources.cryptoCompareAPI.getCoinPriceBySymbol({ symbol: symbol }),
  }
};
