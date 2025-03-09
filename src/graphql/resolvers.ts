import { ResumeService } from "../services/ResumeService";
import { CoverLetterService } from "../services/CoverLetterService";

const resumeService = new ResumeService();
const coverLetterService = new CoverLetterService();

export const resolvers = {
  Query: {
    hello: () => "Hello from GraphQL!",
  },
  Mutation: {
    generateResume: (
      _: any,
      args: { name: string; title: string; experience: string[] }
    ) => resumeService.generateResume(args.name, args.title, args.experience),

    generateCoverLetter: (
      _: any,
      args: { name: string; position: string; company: string }
    ) =>
      coverLetterService.generateCoverLetter(
        args.name,
        args.position,
        args.company
      ),
  },
};
