import type { Technology } from "./types";
import { slugify } from "./types";

type SeedTech = Omit<Technology, "slug" | "sortOrder">;

const items: SeedTech[] = [
  { name: "HTML5", color: "#E34F26", category: "Frontend", type: "Markup", iconKey: "HTML5", description: "The standard markup language for creating web pages and web applications." },
  { name: "CSS3", color: "#1572B6", category: "Frontend", type: "Styling", iconKey: "CSS3", description: "Style sheet language for describing the presentation of web documents." },
  { name: "JavaScript", color: "#F7DF1E", category: "Frontend", type: "Language", iconKey: "JavaScript", description: "High-level, dynamic programming language for interactive web development." },
  { name: "React", color: "#61DAFB", category: "Frontend", type: "Library", iconKey: "React", description: "Building dynamic, high-performance interactive user interfaces for complex web applications." },
  { name: "Tailwind CSS", color: "#06B6D4", category: "Frontend", type: "Framework", iconKey: "TailwindCSS", description: "A utility-first CSS framework for rapid UI development with consistent design systems." },
  { name: "Vite", color: "#646CFF", category: "Frontend", type: "Build Tool", iconKey: "Vite", description: "Next generation frontend tooling for lightning fast development experience." },
  { name: "Angular", color: "#DD0031", category: "Frontend", type: "Framework", iconKey: "Angular", description: null },
  { name: "Flutter", color: "#02569B", category: "Frontend", type: "Framework", iconKey: "React", description: null },
  { name: "Android", color: "#3DDC84", category: "Frontend", type: "Platform", iconKey: "Android", description: null },
  { name: "Node.js", color: "#339933", category: "Backend", type: "Runtime", iconKey: "NodeJS", description: "Event-driven runtime for building scalable network applications and fast APIs." },
  { name: "Express", color: "#000000", category: "Backend", type: "Framework", iconKey: "Express", description: "Fast, unopinionated, minimalist web framework for Node.js applications." },
  { name: "Python", color: "#3776AB", category: "Backend", type: "Language", iconKey: "Python", description: "Powerful language for backend logic, data processing, and AI integration." },
  { name: "Django", color: "#092E20", category: "Backend", type: "Framework", iconKey: "Django", description: "High-level Python web framework for rapid development and clean design." },
  { name: "Java", color: "#007396", category: "Backend", type: "Language", iconKey: "Java", description: null },
  { name: "Machine Learning", color: "#FF6F00", category: "AI/ML", type: "Domain", iconKey: "MachineLearning", description: "Building intelligent systems that learn from data and improve over time." },
  { name: "Deep Learning", color: "#FF4081", category: "AI/ML", type: "Domain", iconKey: "DeepLearning", description: "Neural network architectures for complex pattern recognition and AI solutions." },
  { name: "NLP", color: "#00BCD4", category: "AI/ML", type: "Specialty", iconKey: "NLP", description: "Natural Language Processing for text analysis, chatbots, and language understanding." },
  { name: "Computer Vision", color: "#9C27B0", category: "AI/ML", type: "Specialty", iconKey: "ComputerVision", description: "Image and video analysis, object detection, and visual recognition systems." },
  { name: "IoT", color: "#00C853", category: "AI/ML", type: "Domain", iconKey: "IoT", description: null },
  { name: "MongoDB", color: "#47A248", category: "Database", type: "NoSQL", iconKey: "MongoDB", description: "Flexible document-based database for modern scalable applications." },
  { name: "SQL", color: "#4479A1", category: "Database", type: "Query Language", iconKey: "SQL", description: "Standard language for managing and manipulating relational databases." },
  { name: "Git", color: "#F05032", category: "Tools & DevOps", type: "Version Control", iconKey: "Git", description: "Distributed version control system for tracking changes in source code." },
  { name: "Docker", color: "#2496ED", category: "Tools & DevOps", type: "Container", iconKey: "Docker", description: "Platform for developing, shipping, and running applications in containers." },
  { name: "Linux", color: "#FCC624", category: "Tools & DevOps", type: "OS", iconKey: "Linux", description: "Open-source operating system powering servers and development environments." },
  { name: "Power BI", color: "#F2C811", category: "Tools & DevOps", type: "Analytics", iconKey: "PowerBI", description: "Business analytics tool for interactive visualizations and business intelligence." },
  { name: "Advanced Excel", color: "#217346", category: "Tools & DevOps", type: "Analytics", iconKey: "Excel", description: "Advanced spreadsheet capabilities for data analysis and reporting." },
  { name: "DevOps", color: "#0078D7", category: "Tools & DevOps", type: "Practice", iconKey: "DevOps", description: null },
  { name: "AWS", color: "#FF9900", category: "Tools & DevOps", type: "Cloud", iconKey: "AWS", description: null },
  { name: "Azure", color: "#0078D4", category: "Tools & DevOps", type: "Cloud", iconKey: "Azure", description: null },
];

export const technologyCatalog: Technology[] = items.map((item, sortOrder) => ({
  ...item,
  slug: slugify(item.name),
  sortOrder,
}));

export const technologyCategories = ["Frontend", "Backend", "AI/ML", "Database", "Tools & DevOps"] as const;
