import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    title: "HydroMaze Customers App",
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
    github: "https://github.com/sj-cantos/Water-Refilling-Management-System-Customer-Side",
    external: "https://hydromaze-water-refilling.vercel.app/"
  },
  {
    title: "HydroMaze Admin Dashboard",
    images: [
      "/assets/admin-dashboard.png",
      "/assets/admin-dashboard-2.png",
      "/assets/admin-dashboard-3.png",
      "/assets/admin-dashboard-4.png"
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
      "Docker",
      "GitHub Actions"
    ],
    github: "https://github.com/sj-cantos/HydroMaze-Admin",
    external: "http://18.142.228.168:8080/"
  },
  {
    title: "Hotel Reservation System",
    images: [
      "/assets/hotel booking.PNG",
      "/assets/hotel booking 2.PNG",
      "/assets/hotel booking 3.PNG",
      "/assets/hotel booking 4.PNG"
    ],
    description:
      "A full-stack web-based application for managing hotel bookings, providing an intuitive interface for customers to reserve rooms online.",
    technologies: ["React.js", "Node.js", "MySQL", "Express.js", "Chart.js"],
    github: "https://github.com/sj-cantos/Hotel-Reservation-Customer-Side",
    external: "https://hotel-reservation-client.onrender.com/"
  },
  {
    title: "Library Management System API",
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
      "Docker",
    ],
    github: "https://github.com/sj-cantos/Books-API-with-Spring-Boot",
    // external: "https://books-api.example.com"
  },
  // Add more projects as needed
];