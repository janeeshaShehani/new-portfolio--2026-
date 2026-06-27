export const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Certs","Volunteering", "Contact"];

export const TECH_TAGS = ["React", "Node JS", "Python", "AI / ML", "Power BI"];

export const SKILLS = {
  Frontend: ["React.js", "HTML5", "CSS", "JavaScript", "Tailwind CSS", "Figma"],
  Backend: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB"],
  Programming: ["Python", "Java", "TypeScript", "C#", "SQL"],
  Databases: [ "MongoDB", "PostgreSQL", "My SQL", "SQL Server"],
  Visualization:["Matplotlib", "Pandas", "Numpy Streamlit", "Power BI"],
  Tools: ["Git & GitHub", "VS Code", "Postman","Visual Studio"],
};

export const PROJECTS = [
  {
    title:"GarageFinder – Vehicle Service Platform (Web Application)",
    description:"Developed a vehicle service platform to help users find nearby garages and vehicle services. Built responsive frontend interfaces using React.js and implemented role-based garage dashboards. Added garage registration, login authentication, and search filtering features.",
    tech: ["React js", "JavaScript", "Node.js", " MongoDB",],
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
     github: "https://github.com/janeeshaShehani/GarageFinder.git"
  },
  {
    title:"Customer Shopping Behavior Analytics Dashboard",
    description:"Analyzed customer shopping data using Python, SQL, and PostgreSQL. Performed data cleaning, preprocessing, and feature engineering with Pandas. Developed an interactive Power BI dashboard to visualize customer behavior and spending trends.",
    tech: ["Python", "Pandas", "PostgreSQL", "SQL", "Power BI", "Jupyter Notebook"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
     github: "https://github.com/janeeshaShehani/customer_shopping_behavior_power_BI_project.git"
  },
  {
    title: "KITS-Intelligent-Tutoring-System (Group Project)",
    description:
      "An AI-powered Intelligent Tutoring System that delivers personalized learning experiences by adapting content to student performance. It provides smart quizzes, real-time feedback, progress tracking, and a chatbot assistant to support learners and help educators monitor student understanding effectively.",
    tech: ["React", "Python", "FastAPI", "CNN",],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200",
    github: "https://github.com/AnuradhaRashmika/KITS-Intelligent-Tutoring-System.git"

  },
  {
    title: "Employee Management System (Group Project)",
    description:
      "A desktop-based application built using C# to manage employee records efficiently. It allows adding, updating, deleting, and viewing employee details, while improving HR operations through structured data management and easy user interaction.",
    tech: ["C#","SQL" ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200" ,
        github: "https://github.com/AnuradhaRashmika/EmployeeManagementSystem.git"

  },
  {
    title: "vehicle rent project (Group Project)",
    description:
      "A web-based vehicle rental platform that allows users to browse available vehicles and book them easily. The system provides a simple and responsive interface to view different types of vehicles and manage booking requests efficiently.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
    github: "https://github.com/janeeshaShehani/vehicle-rent-project.git"

  },
  
];

export const VOLUNTEERING = [
  {
    org: "IEEE Computer Society of university of Kelaniya",
    role: "Public Visibility Team Member",
    year: "May 2024 - Nov 2024 ",
    description:
      "Public Visibility Team Member for Code Quest 24 (IEEE CS Chapter, UoK), contributing to event promotion, outreach, and engagement to increase participation in a Python programming workshop.",
   
  },
  {
    org: "UOK ISACA Student Group",
    role: "Event Organizing Committee Member",
    year: "Jul 2024 - Aug 2024",
    description:
      "Event Organizing Committee Member for CyberZee 2024 (ISACA Student Group, UoK), supporting planning and execution of a cybersecurity-focused event.",
   
  },
  {
    org: "Leo Club University of Kelaniya",
    role: "Public Relations & Marketing Coordinator",
    year: "Aug 2024 - May 2025",
    description:
      "PR & Marketing Coordinator for Waruwa (LEO Club, UoK – Differently Abled Avenue 24/25), contributing to promotional design and fundraising coordination to support care for differently-abled individuals and animals.",
   
  },
  {
    org: "Computer Science Student's Association of University of Kelaniya",
    role: "Volunteer Teacher",
    year: "2024 , 2025",
    description:
      "Volunteer Teacher for an educational outreach program by the Computer Science Students’ Association, University of Kelaniya, supporting students in under-resourced communities through academic guidance, motivation, and inclusive learning experiences.",
  
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/janeeshaShehani",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/janeesha-divyanjalee-b3a841355/",
  },
];

// Images use public folder paths — no import needed in data.js
export const CERTIFICATIONS = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "Coursera / IBM",
    date: "2026",
    type: "Online Certification",
    link: "https://coursera.org/share/f5c11852a263d3c292df7e86f08059b8",
    image: "/images/cert1.png",
  },
  {
    title: "What is Data Science?",
    issuer: "Coursera / IBM",
    date: "2026",
    type: "Online Certification",
    link: "https://coursera.org/share/fe4c1d1af2e9762ca994560be5b05342",
    image: "/images/cert2.png",
  },
];