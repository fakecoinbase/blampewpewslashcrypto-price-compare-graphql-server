const { RESTDataSource } = require('apollo-datasource-rest');

class CoinMarketCapAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.COIN_MARKET_CAP_API_URL;
  }

  willSendRequest(request) {
    request.headers.set('X-CMC_PRO_API_KEY', process.env.COIN_MARKET_CAP_API_KEY);
    request.headers.set('Accept', 'application/json');
  }

  async getLatestListings() {
    const response = await this.get('cryptocurrency/listings/latest');

    return Array.isArray(response.data)
      ? response.data.map(coin => this.coinReducer(coin))
      : [];
  }

  async getCoinPriceBySymbol({ symbol }) {
    const response = await this.get('cryptocurrency/quotes/latest', { symbol: symbol });
    return this.priceReducer(response.data[symbol]);
  }

  priceReducer(price) {
    return {
      currency: 'USD',
      value: price.quote.USD.price,
    }
  }

  coinReducer(coin) {
    console.log(coin);
    return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      rank: coin.cmc_rank,
      price: {
        currency: 'USD',
        value: coin.quote.USD.price
      }
    }
  }
}

module.exports = CoinMarketCapAPI;
