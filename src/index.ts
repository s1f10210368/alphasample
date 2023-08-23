import { ConversationChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";

require("dotenv").config();

export const run = async () => {
  const llm = new OpenAI({ temperature: 0 });

  const chain = new ConversationChain({ llm: llm });

  const input1 = " リスト xs を引数にとり、その先頭要素を除いたリストを返す関数 remove : 'a list -> 'a list を定義せよ";
  const res1 = await chain.call({ input: input1 });
  console.log("A:", input1);
  console.log("B:", res1["response"]);
};
run();