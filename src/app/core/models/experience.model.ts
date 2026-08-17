export type ExperienceType = 'work' | 'education' | 'project';

export interface ExperienceItem {
  id: string;
  role: string;
  companyOrInstitution: string;
  period: string;
  description: string;
  type: ExperienceType;
  achievements: string[];
  skills: string[];
}