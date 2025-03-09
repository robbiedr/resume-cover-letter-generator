export interface ICoverLetterService {
  generateAICoverLetter(
    name: string,
    position: string,
    company: string
  ): Promise<string>;
}
