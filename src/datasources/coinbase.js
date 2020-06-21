const { RESTDataSource } = require('apollo-datasource-rest');

class CoinBaseAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.coinbase.com/v2/';
  }

  async getCoinPriceBySymbol({ symbol }) {
    const response = await this.get(`prices/${symbol}-USD/buy`);
    return this.priceReducer(response.data);
  }

  priceReducer(price) {
    return {
      currency: 'USD',
      value: price.amount,
    }
  }

}

module.exports = CoinBaseAPI;
