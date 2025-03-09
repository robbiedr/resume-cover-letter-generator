import type { IResumeService } from "../interfaces/IResumeService";

export class ResumeService implements IResumeService {
  generateResume(name: string, title: string, experience: string[]): string {
    return `
    Resume:
    Name: ${name}
    Title: ${title}

    Experience:
    - ${experience.join("\n- ")}
    `;
  }
}
