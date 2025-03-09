export interface IResumeService {
  generateResume(name: string, title: string, experience: string[]): string;
}
