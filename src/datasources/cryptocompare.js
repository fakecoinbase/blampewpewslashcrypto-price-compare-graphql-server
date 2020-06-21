const { RESTDataSource } = require('apollo-datasource-rest');

class CryptoCompareAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://min-api.cryptocompare.com/data/';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', 'Apikey ' + this.context.crypto_compare_api_key);
  }

  async getLatestListings() {
    const response = await this.get('top/totalvolfull?limit=10&tsym=USD');
    console.log(response);
    return Array.isArray(response.Data)
      ? response.Data.map((coin, index) => this.coinReducer(coin, index))
      : [];
  }

  async getCoinPriceBySymbol({ symbol }) {
    const response = await this.get('price', { fsym: symbol , tsyms: 'USD'});
    console.log(response);
    return this.priceReducer(response);
  }

  priceReducer(price) {
    return {
      currency: 'USD',
      value: price.USD,
    }
  }

  coinReducer(coin, index) {
    console.log(coin);
    return {
      id: coin.CoinInfo.Id,
      name: coin.CoinInfo.FullName,
      symbol: coin.CoinInfo.Name,
      rank: index + 1,
      price: coin.RAW.USD.PRICE
    }
  }
}

module.exports = CryptoCompareAPI;
