import { ConversationChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import { runA } from "../HumanA/memoryA"; 
import { runB } from "/Users/iniad/Documents/TS/alphasample/HumanB/memoryB"; 
import axios from "axios";

require("dotenv").config();

export const runC = async () => {
    // LLMの準備
    const llm = new OpenAI({ temperature: 0 });
  
    // ConversationChainの準備
    const chain = new ConversationChain({ llm: llm });

    // 会話の実行
    const input1 = `${runA}と${runB}が何かわかりますか？`; 
    const res1 = await chain.call({ input: input1 });
    console.log("total:", res1["response"]);
    const aaa = res1["response"];
    aaa
};

runC();
