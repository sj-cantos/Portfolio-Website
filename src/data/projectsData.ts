import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    title: "HydroMaze App",
    images: [
      "/assets/hydromaze.png",
      "/assets/hydromaze2.png",
      "/assets/hydromaze3.png"
    ],
    description:
      "A full-stack web-based ordering system specifically designed for a water refilling station, offering an intuitive interface for customers to place refill requests online.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Mapbox API",
    ],
  },
  {
    title: "HydroMaze Admin Dashboard",
    images: [
      "/assets/hydromaze.png",
      "/assets/hydromaze2.png"
    ],
    description:
      "A full-stack web-based admin dashboard for managing the water refilling station, providing insights into customer orders and inventory.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Chart.js",
      "Mapbox API",
    ],
  },
  {
    title: "Hotel Reservation System",
    images: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "A full-stack web-based application for managing hotel bookings, providing an intuitive interface for customers to reserve rooms online.",
    technologies: ["React.js", "Node.js", "MySQL", "Express.js", "Chart.js"],
  },
  {
    title: "Books API",
    images: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "An API for managing a collection of books, providing features for searching, adding, and removing books.",
    technologies: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Hibernate",
      "JUnit",
      "Docker",
    ],
  },
  // Add more projects as needed
];