
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
}

export interface Skill {
  name: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface ExperienceItem {
  id: number;
  type: 'Education' | 'Work';
  title: string;
  institution: string;
  date: string;
  description: string;
}