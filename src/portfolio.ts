
import emoji from "react-easy-emoji";

// Splash Screen

const splashScreen = {
  enabled: true,
  duration: 1000
};

const about = {
  username: "Izabella Brandao",
  title: "Hello, I'm Izabella",
  subTitle: emoji(
    "As a dedicated Full Stack Software Developer 🚀, I bring valuable expertise in crafting robust applications using a versatile tech stack, including Node.js, TypeScript, Golang, React.js, React Native, and various other cutting-edge libraries and frameworks. With a passion for creating innovative solutions, I thrive on turning ideas into seamless, high-performance software."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RJC88Fp9MVjyjR9aWloPSBucVTcPnY6N/view?usp=sharing",
  displayAbout: true
};

// compute "years of experience" in the hero without hardcoding a number that rots.
const techCareerStartYear = 2022;

// Hero visual: stacked cards showing real facets of her stack, back to front.
const heroFacets = [
  { role: "Backend Developer", tags: ["Node.js", "Golang", "SQL", "Firebase", "NestJs"] },
  { role: "Infra & Cloud", tags: ["AWS", "Docker", "Firebase"] },
  { role: "Full Stack Developer", tags: ["React", "TypeScript", "Angular"] }
];

// Social Media Links

const socialMedia = {
    data: [
    {
        socialMediaName: "github",
        href: "https://github.com/bellacbs",
        fontAwesomeClassname:"fa-brands fa-github",
        socialClass: "github"
    },{
        socialMediaName: "linkedin",
        href: "https://www.linkedin.com/in/izabella-brandao/",
        fontAwesomeClassname:"fa-brands fa-linkedin-in",
        socialClass: "linkedin"
    },{
        socialMediaName: "gmail",
        href: "mailto:izabellacbrandao@gmail.com",
        fontAwesomeClassname:"fas fa-envelope",
        socialClass: "google"
    }
    ],
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EAGER FULL STACK DEVELOPER EXPLORING DIVERSE TECH STACKS.",
  skills: [
    emoji(
      "⚡ Full Stack Developer crafting engaging user interfaces for web and mobile apps. Utilizing Docker for consistent development environments and implementing CI/CD for streamlined testing and deployment."
    ),
    emoji("⚡ Developing robust iOS, Android, web, and API solutions, including Progressive Web Applications (PWAs) in both traditional and Single Page Application (SPA) stacks."),
    emoji(
      "⚡ Seamlessly integrating third-party services, including Firebase, AWS, and Google Cloud, to enhance the functionality and performance of applications."
    )
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Descomplica Digital College",
      logo: "/images/descomplicaLogo.jpeg",
      subHeader: "MBA in Information Security",
      duration: "2023 - 2024"
    },
    {
      schoolName: "Labenu",
      logo: "/images/labenuLogo.jpeg",
      subHeader: "BootCamp Web Full Stack",
      duration: "2021 - 2021"
    },
    {
      schoolName: "ESAB - Escola Superior Aberta do Brasil",
      logo: "/images/esabLogo.jpeg",
      subHeader: "Bachelor of Information Systems",
      duration: "2017 - 2020"
    },
    {
      schoolName: "ESAB - Escola Superior Aberta do Brasil",
      logo: "/images/esabLogo.jpeg",
      subHeader: "Graduate Degree in Systems Engineering",
      duration: "2019 - 2020"
    },
    {
      schoolName: "Puc Minas",
      logo: "/images/pucMinasLogo.jpeg",
      subHeader: "Graduate Degree in IT Governance",
      duration: "2018 - 2020"
    },
    {
      schoolName: "Pitágoras Integrated Colleges of Montes Claros",
      logo: "/images/unifipmocLogo.jpeg",
      subHeader: "Bachelor of Civil Egineering",
      duration: "2010 - 2017"
    }
  ]
};

// Proficiency section — tech stack organized as a category card grid
const skillCategories = {
  display: true,
  categories: [
    {
      key: "frontend",
      title: "Frontend",
      desc: "Fast, accessible interfaces for the web.",
      accent: "blue",
      tags: ["React", "HTML", "CSS", "Next.js", "TypeScript", "Angular"]
    },
    {
      key: "backend",
      title: "Backend",
      desc: "APIs and services that scale with the product.",
      accent: "purple",
      tags: ["Node.js", " NestJS", "PHP", "Golang", "Java Quarkus"]
    },
    {
      key: "data",
      title: "Data",
      desc: "Modeling and querying with efficiency in mind.",
      accent: "blue",
      tags: ["SQL", "NoSQL", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      key: "cloud",
      title: "Cloud & DevOps",
      desc: "Deploys, containers, and infrastructure that stays up.",
      accent: "pink",
      tags: ["AWS", "Docker", "Firebase"]
    },
    {
      key: "languages",
      title: "Languages",
      desc: "Typing and clarity across every layer.",
      accent: "purple",
      tags: ["TypeScript", "Golang", "Java", "JavaScript", "PHP"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer",
      company: "Caixa Econômica Federal",
      companylogo: "/images/caixaEconomicaFederalLogo.png",
      date: "Jun 2025 - Present",
      desc: "",
      descBullets: [
        "Contributed to innovation and digital transformation initiatives.",
        "Designed and developed APIs with SAP ECC and Java Quarkus for enterprise system integration.",
        "Collaborated on the development of new web applications using Angular.",
      ]
    },
    {
      role: "Full Stack Developer",
      company: "ICBS Desenvolvimento de Softwares",
      companylogo: "/images/icbs-work-experience-logo.png",
      date: "Jun 2022 - Sep 2025",
      desc: "",
      descBullets: [
        "Manage my own company, delivering freelance web development services.",
        "Build web applications using React, Node.js, Golang, NestJS, JavaScript, and TypeScript.",
        "Develop solutions with Docker, Firebase, MySQL, PostgreSQL, and AI integrations.",
        "Collaborate with clients to deliver scalable and innovative solutions.",
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Ubistart",
      companylogo: "/images/ubistartLogo.jpeg",
      date: "Jan 2024 - Mar 2025",
      desc: "",
      descBullets: [
        "99% optimization of PDF generation using the Go language.",
        "Application back-end for adequate duplicate invoices for the user of the company's service",
        "Front-end project maintenance using Reactjs",
      ]
    },
    {
      role: "Counselor",
      company: "YMCA of Greater Rochester",
      companylogo: "/images/ymcaLogo.jpeg",
      date: "May 2023 - Sep 2023",
      desc: "",
      descBullets: [
        "Developed creative and collaborative activities for native English speakers.",
        "Actively learned English while leading educational programs.",
        "Diligent supervision to ensure a safe environment.",
        "Effective collaboration in multicultural teams, enhancing teamwork skills."
      ]
    },
    {
      role: "Backend developer",
      company: "Ubistart",
      companylogo: "/images/ubistartLogo.jpeg",
      date: "Jun 2022 - Mar 2023",
      desc: "",
      descBullets: [
        "Designed and implemented real-time communication applications for video calls and radio using the WebRTC protocol.",
        "Managed transmission, call processing, and recording phases.",
        "Developed a machine communication application with a custom protocol.",
        "Building new robust applications for a mining company.",
        "Served as a full-stack developer for a legacy construction project.",
        "Resolved existing bugs and enhanced usability and performance.",
        "Reduced report generation time from 1 hour 30 minutes to 20 minutes."
      ]
    },
    {
      role: "Pedagogical Monitor",
      company: "Labenu",
      companylogo: "/images/labenuLogo.jpeg",
      date: "Nov 2021 - Jun 2022",
      desc: "",
      descBullets: [
        "Training technology professionals, including class monitoring, student support, code evaluation, and providing feedback for improvement.",
        "Teaching individuals who came from completely different career backgrounds to the IT industry.",
        "Personal satisfaction in witnessing the positive impact on students' lives and their progress due to the knowledge acquired.",
        "Expansion of my technical skills and enhancement of my ability to convey knowledge, thanks to exposure to different perspectives on technologies."
      ]
    },
    {
      role: "Bank Enployee",
      company: "Bank of Brazil",
      companylogo: "/images/bancodobrasilLogo.jpeg",
      date: "Jul 2012 - Mar 2021 ",
      desc: "",
      descBullets: [
        "Promotion and marketing of various banking products and services.",
        "Alignment of corporate goals with the needs and desires of clients.",
        "Coordination among different parties in credit contracting.",
        "Monitoring the development of technical projects and credit limits with external partners.",
        "Approval of analyses within operational centers.",
        "Certification and involvement in the field of investments.",
        "Teamwork with mutual assessment.",
        "Professional development capable of providing and receiving constructive feedback."
      ]
    },
    
  ]
};

const gitHubProjects = {
  showGithubProfile: "true",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "izabellacbrandao@gmail.com"
};

const isHireable = true;

export {
    about,
    techCareerStartYear,
    heroFacets,
    socialMedia,
    splashScreen,
    skillsSection,
    educationInfo,
    skillCategories,
    workExperiences,
    gitHubProjects,
    contactInfo,
    isHireable
};
