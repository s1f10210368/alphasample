import axios from 'axios';

const API_KEY = 'L9ZH7B1TW75Z7VZE';
const BASE_URL = 'https://www.alphavantage.co/query';

async function getForexExchangeRate(fromCurrency: string, toCurrency: string): Promise<number> {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'CURRENCY_EXCHANGE_RATE',
        from_currency: fromCurrency,
        to_currency: toCurrency,
        apikey: API_KEY,
      },
    });

    const exchangeRate = response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
    return parseFloat(exchangeRate);
  } catch (error) {
    throw new Error('Failed to fetch forex exchange rate');
  }
}

async function main() {
    try {
      const fromCurrency = 'USD';
      const toCurrency = 'JPY';
  
      const exchangeRate = await getForexExchangeRate(fromCurrency, toCurrency);
      console.log(`1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unknown error occurred.');
      }
    }
  }

main();
