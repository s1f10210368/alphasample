import OpenAI from "openai";
import { PromptTemplate } from "langchain";
import { LLMChain } from "langchain";
import { ConversationChain } from "langchain/chains";
import ConversationBufferMemory from "langchain";

const openai = new OpenAI({
    apiKey: "YOUR_API_KEY", // OpenAI API キーを指定
    // 他のオプションも必要に応じて指定
});