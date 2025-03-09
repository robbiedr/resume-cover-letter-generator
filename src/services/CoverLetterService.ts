import type { ICoverLetterService } from "../interfaces/ICoverLetterService";

export class CoverLetterService implements ICoverLetterService {
  generateCoverLetter(name: string, position: string, company: string): string {
    return `
    Dear Hiring Manager,

    My name is ${name}, and I am excited to apply for the ${position} position at ${company}.
    
    I believe my skills and experience make me a great fit for this role.

    Best Regards,
    ${name}
    `;
  }
}
