module.exports = {
  Query: {
    coinsmarketcapListing: (_, __, { dataSources }) =>
      dataSources.coinMarketCapAPI.getLatestListings(),
    cryptocompareListing: (_, __, { dataSources }) =>
      dataSources.cryptoCompareAPI.getLatestListings(),
    coinmarketcapPrice: (_, { symbol }, { dataSources}) =>
      dataSources.coinMarketCapAPI.getCoinPriceBySymbol({ symbol: symbol }),
    cryptocomparePrice: (_, { symbol }, { dataSources}) =>
      dataSources.cryptoCompareAPI.getCoinPriceBySymbol({ symbol: symbol }),
    coinbasePrice: (_, { symbol }, { dataSources }) =>
      dataSources.coinBaseAPI.getCoinPriceBySymbol({ symbol: symbol })
  }
};
