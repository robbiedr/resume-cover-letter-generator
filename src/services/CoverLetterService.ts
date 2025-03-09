import type { ICoverLetterService } from "../interfaces/ICoverLetterService";
import { OpenAIService } from "./OpenAIService";

const openAIService = new OpenAIService();

export class CoverLetterService implements ICoverLetterService {
  async generateAICoverLetter(
    name: string,
    position: string,
    company: string,
    skills?: string[],
    experience?: number
  ): Promise<string> {
    const skillsText = skills?.length
      ? ` They have skills in ${skills.join(", ")}.`
      : "";
    const experienceText = experience
      ? ` They have ${experience} years of experience.`
      : "";

    const prompt = `Write a personalized cover letter for ${name} applying for ${position} at ${company}.${skillsText}${experienceText}`;

    return await openAIService.generateText(prompt);
  }
}
