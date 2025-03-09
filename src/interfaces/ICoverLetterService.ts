export interface ICoverLetterService {
  generateAICoverLetter(
    name: string,
    position: string,
    company: string
  ): Promise<{ data: string; fromCache: boolean; cacheDate?: Date }>;
}
