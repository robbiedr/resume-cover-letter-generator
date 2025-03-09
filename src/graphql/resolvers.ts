import { ResumeService } from "../services/ResumeService";
import { CoverLetterService } from "../services/CoverLetterService";

const resumeService = new ResumeService();
const coverLetterService = new CoverLetterService();

export const resolvers = {
  Query: {
    hello: () => "Hello from GraphQL!",
  },
  Mutation: {
    generateAIResume: async (
      _: any,
      {
        name,
        title,
        experience,
      }: { name: string; title: string; experience: string[] }
    ) => {
      return await resumeService.generateAIResume(name, title, experience);
    },

    generateAICoverLetter: async (
      _: any,
      {
        name,
        position,
        company,
        skills,
        experience,
      }: {
        name: string;
        position: string;
        company: string;
        skills?: string[];
        experience?: number;
      }
    ) => {
      return await coverLetterService.generateAICoverLetter(
        name,
        position,
        company,
        skills,
        experience
      );
    },
  },
};
