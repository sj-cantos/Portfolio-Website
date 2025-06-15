import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import type { AboutData } from "../types/types";

const aboutData: AboutData[] = [
  {
    icon: (
      <Code className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: (
      <Coffee className="h-6 w-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Passion for Learning",
    description: "Constantly exploring new technologies and best practices",
  },
  {
    icon: (
      <Lightbulb className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Innovative Solutions",
    description: "Creating unique solutions to complex problems",
  },
  {
    icon: (
      <Users className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Team Collaboration",
    description: "Working effectively in diverse teams to achieve common goals",
  },
];
export default aboutData;