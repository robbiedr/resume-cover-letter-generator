import type { IResumeService } from "../interfaces/IResumeService";
import { OpenAIService } from "./OpenAIService";
import { CacheService } from "../services/CacheService";

const openAIService = new OpenAIService();
const cacheService = new CacheService();

export class ResumeService implements IResumeService {
  async generateAIResume(
    name: string,
    title: string,
    experience: string[]
  ): Promise<{ data: string; fromCache: boolean; cacheDate?: Date }> {
    console.log({ name, title, experience });
    const cacheKey = `resume:${name}:${title}:${experience.join(",")}`;
    const cachedResponse = await cacheService.get(cacheKey);

    if (cachedResponse) {
      console.log("Serving from cache");
      console.log({ cachedResponse });
      return {
        data: cachedResponse?.data,
        fromCache: true,
        cacheDate: cachedResponse?.timestamp,
      };
    }

    const prompt = `Generate a professional resume for ${name}, a ${title}. Work experience includes: ${experience.join(
      ", "
    )}.`;

    const generatedText = await openAIService.generateText(prompt);

    await cacheService.set(cacheKey, generatedText);
    return { data: generatedText, fromCache: false };
  }
}
