export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
