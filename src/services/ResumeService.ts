import type { IResumeService } from "../interfaces/IResumeService";
import { OpenAIService } from "./OpenAIService";

const openAIService = new OpenAIService();

export class ResumeService implements IResumeService {
  async generateResume(
    name: string,
    title: string,
    experience: string[]
  ): Promise<string> {
    const prompt = `Generate a professional resume for ${name}, a ${title}. Work experience includes: ${experience.join(
      ", "
    )}.`;
    return await openAIService.generateText(prompt);
  }
}
