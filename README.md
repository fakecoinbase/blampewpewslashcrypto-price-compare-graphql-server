# Crypto Price Compare GraphQL Server

Fun learning experiment to get acquainted with GraphQL and Apollo Server. This project will build an [Apollo Server](https://www.apollographql.com/docs/apollo-server/#:~:text=Apollo%20Server%20is%20an%20open,use%20data%20from%20any%20source.) that can query the following cryptocurrency APIs:

 - CoinmarketCap
 - CryptoCompare

The main learning goal was to understand the benefits of GraphQL and see the capability of querying multiple data sources (two REST APIs in this experiment) using one query.

# Installation & Set Up
Create a `.env` folder at the root of the project containing the API keys needed to perform the requests. 

Example:
```
API_KEY=PUT_KEY_HERE
CRYPTO_COMPARE_API_KEY=PUT_KEY_HERE
```
Then run:
```
npm install
npm start
```

# GraphQL Queries

 - `coinMarketcapListing`: Will return the latest listings from coinmarketcap. 
 - `cryptoCompareListing`: Will return the latest listings from cryptocompare.
 - `coinmarketcap(Symbol)`: Will return the price for a cryptocurrency in USD from coinmarketcap.
 - `cryptocompare(Symbol)`: Will return the price for a cryptocurrency in USD from cryptocompare.

## Example Queries

GraphQL Query:
```
query getCoinPriceBySymbol {
  coinmarketcap(symbol: "ETH") {
    value
  }
  cryptocompare(symbol: "ETH") {
    value
  }
}
```

Response:
```
{
  "data": {
    "coinmarketcap": {
      "value": 168.688633539
    },
    "cryptocompare": {
      "value": 229.2
    }
  }
}
```

