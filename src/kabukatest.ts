const axios = require('axios');

const getStockPrice = async () => {
    const apiKey = "";
    const symbol = "AAPL";
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=15min&apikey=${apiKey}`;

    try {
        const response = await axios.get(url);
        const timeSeries = response.data["Time Series (15min)"];
        const timestamps = Object.keys(timeSeries);
        const latesttimestamps = timestamps.slice(0, 8);

        const stockData = latesttimestamps.map(timestamp => ({
            time: timestamp,
            open: timeSeries[timestamp]['1. open'],
            high: timeSeries[timestamp]['2. high'],
            low: timeSeries[timestamp]['3. low'],
            close: timeSeries[timestamp]['4. close']
        }));

        return stockData; // 株価データを返す

    } catch (error) {
        console.error(error);
        throw error;
    }
};

// 関数の呼び出し
getStockPrice()
    .then(stockData => {
        console.log(stockData);
    })
    .catch(error => {
        console.error(error);
    });

