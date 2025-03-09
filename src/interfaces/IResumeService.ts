export interface IResumeService {
  generateAIResume(
    name: string,
    title: string,
    experience: string[]
  ): Promise<{ data: string; fromCache: boolean; cacheDate?: Date }>;
}
