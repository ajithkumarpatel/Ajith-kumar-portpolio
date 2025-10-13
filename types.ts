export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  imageUrl: string;
  screenshots?: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export interface Notification {
  id?: string;
  title: string;
  message: string;
  timestamp: any; // Firestore Timestamp
  isRead?: boolean; // We'll manage this on the client-side
}