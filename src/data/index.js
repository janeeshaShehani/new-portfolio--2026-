// src/data/index.js
import img1 from "/public/images/img1.png";
export const personalInfo = {
  name: "Janeesha Shehani",
  initials: "JS",
  title: "Software Engineer & Data Scientist",
  tagline: "Turning data into decisions & ideas into scalable systems.",
  bio: "I'm a passionate software engineer and data scientist focused on building intelligent, data-driven systems. Currently seeking opportunities where I can combine clean engineering with powerful ML solutions.",
  email: "shehanijaneesha507@gmail.com",
  linkedin: "https://www.linkedin.com/in/janeesha-divyanjalee-b3a841355/",
  github: "https://github.com/janeeshaShehani",
  cvUrl: "/cv.pdf",
  photo: img1, // e.g. "/photo.jpg" after adding to /public
  stats: [
    { value: "6+", label: "Projects Completed" },
    { value: "10+", label: "Skills Mastered" },
    { value: "3+", label: "Certifications" },
  ],
  techStack: ["React", "Python", "TensorFlow", "AWS"],
};

export const skills = [
  {
    category: "Frontend",
    icon: "⚛️",
    color: "#38BDF8",
    items: [
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "HTML & CSS", level: 88 },
    ],
  },
  {
    category: "Backend",
    icon: "🛠",
    color: "#22C55E",
    items: [
      { name: "Python / FastAPI", level: 88 },
      { name: "Node.js / Express", level: 78 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    category: "AI / Data",
    icon: "🧠",
    color: "#A78BFA",
    items: [
      { name: "TensorFlow / PyTorch", level: 82 },
      { name: "Pandas / Scikit-learn", level: 85 },
      { name: "SQL / PostgreSQL", level: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "#FB923C",
    items: [
      { name: "AWS / GCP", level: 72 },
      { name: "Docker", level: 70 },
      { name: "Git / CI/CD", level: 85 },
    ],
  },
];

export const projects = [
  {
    title: "Customer Churn Predictor",
    type: "ML Model",
    typeColor: "#A78BFA",
    description:
      "End-to-end ML pipeline predicting customer churn with 91% accuracy. Built with XGBoost, deployed via FastAPI on AWS.",
    stack: ["Python", "XGBoost", "FastAPI", "AWS"],
    github: "https://github.com/yourname/project1",
    demo: null,
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    type: "Web App",
    typeColor: "#38BDF8",
    description:
      "React dashboard with live data streaming, interactive charts, and role-based access control.",
    stack: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourname/project2",
    demo: "https://demo.yoursite.com",
    featured: true,
  },
  {
    title: "ETL Data Pipeline",
    type: "Data Engineering",
    typeColor: "#22C55E",
    description:
      "Automated pipeline processing 1M+ records daily using Apache Spark and Airflow.",
    stack: ["Spark", "Airflow", "Python", "AWS S3"],
    github: "https://github.com/yourname/project3",
    demo: null,
    featured: false,
  },
  {
    title: "NLP Sentiment Analyzer",
    type: "AI / NLP",
    typeColor: "#FB923C",
    description:
      "BERT-based sentiment analysis achieving 94% accuracy across 5 languages.",
    stack: ["Python", "BERT", "HuggingFace", "Docker"],
    github: "https://github.com/yourname/project4",
    demo: null,
    featured: false,
  },
];

export const timeline = [
  {
    year: "2026",
    icon: "🤖",
    title: "Built AI Finance System",
    description: "Developed an AI-powered personal finance tracker with predictive analytics.",
    type: "project",
  },
  {
    year: "2025",
    icon: "💼",
    title: "Full-Stack Developer Internship",
    description: "Interned at a tech startup building scalable REST APIs and React dashboards.",
    type: "work",
  },
  {
    year: "2024",
    icon: "🎓",
    title: "Started Data Science Studies",
    description: "Enrolled in a Data Science program, diving deep into ML, statistics, and Python.",
    type: "education",
  },
  {
    year: "2023",
    icon: "🚀",
    title: "First Open Source Contribution",
    description: "Contributed to a popular Python data visualization library on GitHub.",
    type: "milestone",
  },
];