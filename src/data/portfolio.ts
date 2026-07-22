export const personalInfo = {
  name: "Jhondel Batulan",
  title: "BSIT Graduate",
  tagline: "Full Stack Developer",
  email: "jhondelbatulan1@gmail.com",
  phone: "+639126629711",
  location: "Cabadbaran City, Agusan Del Norte, Philippines, 8605",
  github: "https://github.com/jhondelbatulan",
  facebook: "https://facebook.com/Jhondel Batulan",
  about: `Hello, welcome to my portfolio. I am a graduate of Bachelor of Science in Information Technology. I'm a Full Stack Developer (PHP, Flutter, JavaScript), ready for all kind of web/mobile app projects.`,
  aboutDetailed: `I am a passionate and driven Full Stack Developer with a Bachelor's degree in Information Technology from Caraga State University - Cabadbaran Campus. I specialize in building robust web and mobile applications using PHP, Flutter, and JavaScript. With hands-on experience in frameworks like Laravel, Node.js, and Express, I enjoy turning complex problems into simple, elegant, and scalable solutions. I am always eager to learn new technologies and take on challenging projects that push my skills further.`,
}

export interface Skill {
  name: string
  level: number
  icon: string
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    skills: [
      { name: "PHP", level: 90, icon: "php" },
      { name: "JavaScript", level: 85, icon: "javascript" },
      { name: "Dart", level: 80, icon: "dart" },
      { name: "Python", level: 70, icon: "python" },
      { name: "Java", level: 65, icon: "java" },
    ],
  },
  {
    title: "Frameworks",
    icon: "Layers",
    skills: [
      { name: "Laravel", level: 90, icon: "laravel" },
      { name: "Flutter", level: 80, icon: "flutter" },
      { name: "Node.js", level: 75, icon: "nodejs" },
      { name: "Express", level: 75, icon: "express" },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 85, icon: "mysql" },
      { name: "Firebase", level: 75, icon: "firebase" },
      { name: "MongoDB", level: 70, icon: "mongodb" },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 85, icon: "git" },
      { name: "VS Code", level: 90, icon: "vsc" },
      { name: "Android Studio", level: 75, icon: "android" },
      { name: "Figma", level: 70, icon: "figma" },
    ],
  },
]

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  github: string
  liveDemo: string
  role: string
  date: string
  image: string
}

export const projects: Project[] = [
  {
    id: "village-management",
    title: "GIS Enabled Web-Based Multi-Village Management System",
    description:
      "A comprehensive village management system with role-based workflow and predictive analytics for better decision making.",
    longDescription:
      "Village households, billings and payments, announcements and events, participations, analytics, and prediction management for better decision making in the villages.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "GIS"],
    features: [
      "GIS Map of the village and its households",
      "Data analytics of the village and households",
      "Role-based workflow management",
      "Predictive analytics for decision making",
      "Billings and payments tracking",
      "Announcements and events management",
      "Household participation tracking",
    ],
    github: "https://github.com/jhondelbatulan/village-management-system",
    liveDemo: "",
    role: "Backend Development",
    date: "Jul 2026",
    image: "/portfolio/images/project-village.jpg",
  },
]

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
  type: "work" | "internship"
}

export const experiences: Experience[] = [
  {
    id: "intern-1",
    role: "Information Desk Support",
    company: "Cabadbaran City Hall Government",
    location: "Cabadbaran City, Philippines",
    startDate: "Jun 2021",
    endDate: "Jul 2021",
    description:
      "Provided information desk support services, assisting citizens with inquiries, documentation, and government processes.",
    type: "internship",
  },
]

export interface Education {
  id: string
  degree: string
  school: string
  location: string
  startDate: string
  endDate: string
  description: string
}

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Information Technology",
    school: "Caraga State University - Cabadbaran Campus",
    location: "Cabadbaran City, Philippines",
    startDate: "2023",
    endDate: "2027",
    description:
      "Studying core IT concepts including software development, networking, databases, and systems analysis.",
  },
]

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]
