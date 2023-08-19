import { ConversationChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";

// 環境変数
require("dotenv").config();

export const run = async () => {
  // LLMの準備
  const llm = new OpenAI({ temperature: 0 });

  // ConversationChainの準備
  const chain = new ConversationChain({ llm: llm });

  // 会話の実行
  const input1 = "あなたは50万円持っています。FXに投資しなければいけないものとしてどこに投資しますか？";
  const res1 = await chain.call({ input: input1 });
  console.log("A:", input1);
  console.log("B:", res1["response"]);
};
run();