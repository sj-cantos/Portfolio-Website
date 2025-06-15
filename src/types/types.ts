interface Project {
  title: string;
  images: string[]; // Optional image property
  description: string;
  technologies: string[];
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
