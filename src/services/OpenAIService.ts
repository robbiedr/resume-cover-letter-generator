import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: Bun.env.OPENAI_API_KEY });

export class OpenAIService {
  async generateText(prompt: string): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Use "gpt-3.5-turbo" for cheaper requests
        messages: [{ role: "user", content: prompt }],
      });
      return response.choices[0]?.message?.content || "No response from AI";
    } catch (error) {
      console.error("OpenAI API Error:", error);
      return "Error generating text";
    }
  }
}
