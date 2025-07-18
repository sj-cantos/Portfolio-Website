interface Project {
    title: string;
    images: string[];
    description: string;
    technologies: string[];
    github?: string;
    external?: string;
}
interface AboutData {
  icon: React.ReactNode;
  title: string;
  description: string;
}
interface Skills {
  title: string;
  icon: React.ReactNode;
  skills: SkillType[];
}

interface SkillType {
  name: string;
  icon: React.ReactNode;
}
export type { AboutData, Skills, SkillType , Project };
