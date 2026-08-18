export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  // liveDemoUrl: string;
  featured: boolean;
}
export interface ProjectInquiry {
  email: string;
  message: string;
  interestType: 'hire' | 'collaborate' | 'question';
}