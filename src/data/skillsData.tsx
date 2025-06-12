import {
  Code2,
  Database,
  Cloud,
  Settings,
  Smartphone,
  Globe,
  Server,
  GitBranch,
  Terminal,
  Palette,
  Zap,
  Box,
  Shield,
  Monitor,
  Cpu,
  HardDrive,
  Network,
  FileCode,
  Layers,
  Github,
  CirclePower,
  DatabaseZap,
  PaintBucket,
  MessageSquareCode,
  ArrowUpDown,
} from "lucide-react";




export const skillsData = [
  {
    title: "Front-end",
    icon: <Code2 className="h-6 w-6 text-green-600" size={1} />,
    skills: [
      {
        name: "HTML",
        icon: (
          <Globe
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "CSS",
        icon: (
          <Palette
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <Zap
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <Zap
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <FileCode
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "React",
        icon: (
          <Monitor
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Next.js",
        icon: (
          <Layers
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <PaintBucket
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
    ],
  },
  {
    title: "Back-end",
    icon: <Cpu className="h-6 w-6 text-violet-400" size={1} />,
    skills: [
      {
        name: "Node.js",
        icon: (
          <Server
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Express",
        icon: (
          <Terminal
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <Database
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Spring Boot",
        icon: (
          <CirclePower
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <DatabaseZap
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Hibernate",
        icon: (
          <HardDrive
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Redis",
        icon: (
          <Network
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Kafka",
        icon: (
          <MessageSquareCode
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "REST APIs",
        icon: (
          <ArrowUpDown
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
    ],
  },
  {
    title: "DevOps",
    icon: <Cloud className="h-6 w-6 text-orange-400" size={1} />,
    skills: [
      {
        name: "AWS",
        icon: (
          <Cloud
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Docker",
        icon: (
          <Box
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Kubernetes",
        icon: (
          <Shield
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Actions",
        icon: (
          <Github
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Settings className="h-6 w-6 text-blue-500" size={1} />,
    skills: [
      {
        name: "Git",
        icon: (
          <GitBranch
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Postman",
        icon: (
          <Settings
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
      {
        name: "Figma",
        icon: (
          <Smartphone
            className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
            size={1}
          />
        ),
      },
    ],
  },
];