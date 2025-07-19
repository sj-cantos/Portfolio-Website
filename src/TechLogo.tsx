import React from "react";
interface TechLogoProps {
  tech: string;
  size?: number;
}
const TechLogo: React.FC<TechLogoProps> = ({ tech, size }) => {
  const logoMap: { [key: string]: string } = {
    // Frontend
    "React.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Vue.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "TypeScript":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "JavaScript":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "Tailwind CSS":
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "HTML5":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

    // Backend
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Python":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Django":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    "FastAPI":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "Flask":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "Spring Boot":
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
    // Databases
    "PostgreSQL":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "MongoDB":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Redis":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "MySQL":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

    // Cloud & DevOps
    "Docker":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Kubernetes":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "AWS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    "GCP":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    "Vercel":
      "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
    "Heroku":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",

    // Tools & Frameworks
    "Git":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "GitHub":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "VS Code":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "Figma":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Webpack":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    "Vite":
      "https://vitejs.dev/logo.svg",

    // Libraries & APIs
    "GraphQL":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    "Socket.io":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "Jest":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    "Cypress":
      "https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg",
    "TensorFlow":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "Chart.js":
      "https://www.chartjs.org/img/chartjs-logo.svg",

    // Mobile
    "React Native":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

    // Payment & APIs
    "Stripe":
      "https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg",
    "Plaid API":
      "https://dashboard.plaid.com/assets/img/plaid-logo.svg",

    // ORMs & Tools
    "Prisma":
      "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
    "tRPC":
      "https://trpc.io/img/logo.svg",
    "Cloudinary":
      "https://res.cloudinary.com/cloudinary-marketing/image/upload/f_auto,q_auto/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue.svg",
    "JWT":
      "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
    "Mapbox API":
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Mapbox_logo_2019.svg",
    "Java":
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    "Hibernate":
      "https://hibernate.org/images/hibernate-logo.svg"
  };
  const logoUrl = logoMap[tech]; // Fallback if tech not found
  return (
    <>
      <img
        src={logoUrl}
        alt={`${tech} logo`}
        width={size}
        height={size}
        style={{ width: size, height: size }}
      />
    </>
  );
};

export default TechLogo;
