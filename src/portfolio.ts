
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
    "https://drive.google.com/file/d/1QgLuQYCiogfS8zUODyFg-PnxYxNe7kix/view?usp=sharing", // Set to empty to hide the button
  displayAbout: true // Set false to hide this section, defaults to true
};

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

  softwareSkills: [
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fa-brands fa-golang"
    }
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

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Nodejs",
      progressPercentage: "80%"
    },
    {
      Stack: "sql",
      progressPercentage: "70%"
    },
    {
      Stack: "typescript",
      progressPercentage: "80%"
    },
    {
      Stack: "Golang",
      progressPercentage: "80%"
    },
    {
      Stack: "Firebase",
      progressPercentage: "60%"
    },
    {
      Stack: "Docker",
      progressPercentage: "70%"
    },
    {
      Stack: "AWS",
      progressPercentage: "40%"
    },
    {
      Stack: "React",
      progressPercentage: "60%"
    },
    {
      Stack: "React Native",
      progressPercentage: "60%"
    },
    {
      Stack: "HTML",
      progressPercentage: "60%"
    },
    {
      Stack: "CSS",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer",
      company: "Ubistart",
      companylogo: "/images/ubistartLogo.jpeg",
      date: "Jan 2024 - Present",
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
    socialMedia,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    gitHubProjects,
    contactInfo,
    isHireable
};
