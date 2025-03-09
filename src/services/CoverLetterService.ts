import type { ICoverLetterService } from "../interfaces/ICoverLetterService";
import { OpenAIService } from "./OpenAIService";
import { CacheService } from "../services/CacheService";

const openAIService = new OpenAIService();
const cacheService = new CacheService();

export class CoverLetterService implements ICoverLetterService {
  async generateAICoverLetter(
    name: string,
    position: string,
    company: string,
    skills?: string[],
    experience?: number
  ): Promise<{ data: string; fromCache: boolean; cacheDate?: Date }> {
    const skillsKey = skills?.length ? skills.join(",") : "no-skills";
    const experienceKey = experience !== undefined ? experience : 0; // Ensure it's treated as a number

    const cacheKey = `coverletter:${name}:${position}:${company}:${skillsKey}:${experienceKey}`;

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

    const skillsText = skills?.length
      ? ` They have skills in ${skills.join(", ")}.`
      : "";
    const experienceText = experience
      ? ` They have ${experience} years of experience.`
      : "";

    const prompt = `Write a personalized cover letter for ${name} applying for ${position} at ${company}.${skillsText}${experienceText}`;

    const generatedText = await openAIService.generateText(prompt);

    await cacheService.set(cacheKey, generatedText);
    return { data: generatedText, fromCache: false };
  }
}
