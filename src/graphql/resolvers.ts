import { ResumeService } from "../services/ResumeService";
import { CoverLetterService } from "../services/CoverLetterService";

const resumeService = new ResumeService();
const coverLetterService = new CoverLetterService();

import { OpenAIService } from "../services/OpenAIService";

const openAIService = new OpenAIService();

export const resolvers = {
  Query: {
    hello: () => "Hello from GraphQL!",
  },
  Mutation: {
    generateAIResume: async (
      _: any,
      args: { name: string; title: string; experience: string[] }
    ) => {
      const prompt = `Generate a professional resume for ${args.name}, a ${
        args.title
      }. Work experience includes: ${args.experience.join(", ")}.`;
      return await openAIService.generateText(prompt);
    },
    generateAICoverLetter: async (
      _: any,
      args: {
        name: string;
        position: string;
        company: string;
        skills?: string[];
        experience?: number;
      }
    ) => {
      const skillsText = args.skills?.length
        ? ` They have skills in ${args.skills.join(", ")}.`
        : "";
      const experienceText = args.experience
        ? ` They have ${args.experience} years of experience.`
        : "";

      const prompt = `Write a personalized cover letter for ${args.name} applying for ${args.position} at ${args.company}.${skillsText}${experienceText}`;

      return await openAIService.generateText(prompt);
    },
  },
};
