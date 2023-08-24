import { ConversationChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import { character } from "/Users/iniad/Documents/TS/alphasample/src/chara"; 
import axios from "axios";
require("dotenv").config();

const getStockPrice = async () => {
  const apiKey = "";  // Alpha VantageのAPIキーに置き換えてください
  const symbol = "AAPL";  // 株価を取得したい会社を入力
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const timeSeries = response.data["Time Series (1min)"];
    const timestamps = Object.keys(timeSeries);
    const latesttimestamps = timestamps.slice(0, 2);
    
    latesttimestamps.forEach(timestamp => {
      console.log(`Time: ${timestamp}`);
      console.log(`Open: ${timeSeries[timestamp]['1. open']}`);
      console.log(`High: ${timeSeries[timestamp]['2. high']}`);
      console.log(`Low: ${timeSeries[timestamp]['3. low']}`);
      console.log(`Close: ${timeSeries[timestamp]['4. close']}`);
      console.log('---');
    });
  } catch (error) {
    console.error(error);
  }
};

export const run = async () => {
  const llm = new OpenAI({ temperature: 0 });

  const chain = new ConversationChain({ llm: llm });

  const input1 = character;
  const res1 = await chain.call({ input: input1 });
  console.log("A:", input1);
  console.log("B:", res1["response"]);
};

run();