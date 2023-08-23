import axios from "axios";

const getStockPrice = async (symbol) => {
  const apiKey = "Your_Alpha_Vantage_API_Key";
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const timeSeries = response.data["Time Series (Daily)"];
    const timestamps = Object.keys(timeSeries);
    const latestTimestamp = timestamps[0];

    return {
      symbol: symbol,
      time: latestTimestamp,
      open: timeSeries[latestTimestamp]['1. open'],
      high: timeSeries[latestTimestamp]['2. high'],
      low: timeSeries[latestTimestamp]['3. low'],
      close: timeSeries[latestTimestamp]['4. close'],
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const main = async () => {
  const symbols = ["AAPL", "GOOGL"];  // 取得したい企業のシンボルを配列で指定
  const promises = symbols.map(symbol => getStockPrice(symbol));

  try {
    const results = await Promise.all(promises);

    results.forEach(result => {
      if (result) {
        console.log(`Symbol: ${result.symbol}`);
        console.log(`Time: ${result.time}`);
        console.log(`Open: ${result.open}`);
        console.log(`High: ${result.high}`);
        console.log(`Low: ${result.low}`);
        console.log(`Close: ${result.close}`);
        console.log('---');
      }
    });
  } catch (error) {
    console.error(error);
  }
};

main();

//同時に複数取得に成功