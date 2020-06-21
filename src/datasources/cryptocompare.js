const { RESTDataSource } = require('apollo-datasource-rest');

class CryptoCompareAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://min-api.cryptocompare.com/data/';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', 'Apikey ' + process.env.CRYPTO_COMPARE_API_KEY);
  }

  async getLatestListings() {
    const response = await this.get('top/totalvolfull?limit=10&tsym=USD');

    return Array.isArray(response.Data)
      ? response.Data.map((coin, index) => this.coinReducer(coin, index))
      : [];
  }

  async getCoinPriceBySymbol({ symbol }) {
    const response = await this.get('price', { fsym: symbol , tsyms: 'USD'});

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
      price: {
        currency: 'USD',
        value: coin.RAW.USD.PRICE
      }
    }
  }
}

module.exports = CryptoCompareAPI;
