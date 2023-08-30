import { initializeAgentExecutor } from "langchain/agents";
import { OpenAI, PromptTemplate } from "langchain";
import { SerpAPI } from "langchain/tools";

require("dotenv").config();

export const runAgent = async () => {
  const llm = new OpenAI({ temperature: 0 });

  const tools = [new SerpAPI()];

  const executor = await initializeAgentExecutor(
    tools,
    llm,
    "zero-shot-react-description",
    true,
  );

  // first web検索
  const firstPrompt = "ゼノブレイド3の発売日を教えてください";
  const firstRes = await executor.call({ input: firstPrompt });
  console.log("User1", firstPrompt);
  console.log("Agent1", firstRes.output);
};

runAgent();