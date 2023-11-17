
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
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
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
      logo: "./assets/images/descomplicaLogo.jpeg",
      subHeader: "MBA in Information Security",
      duration: "2023 - 2024"
    },
    {
      schoolName: "Labenu",
      logo: "./assets/images/labenuLogo.jpeg",
      subHeader: "BootCamp Web Full Stack",
      duration: "2021 - 2021"
    },
    {
      schoolName: "ESAB - Escola Superior Aberta do Brasil",
      logo: "./assets/images/esabLogo.jpeg",
      subHeader: "Bachelor of Information Systems",
      duration: "2017 - 2020"
    },
    {
      schoolName: "ESAB - Escola Superior Aberta do Brasil",
      logo: "./assets/images/esabLogo.jpeg",
      subHeader: "Graduate Degree in Systems Engineering",
      duration: "2019 - 2020"
    },
    {
      schoolName: "Puc Minas",
      logo: "./assets/images/pucMinasLogo.jpeg",
      subHeader: "Graduate Degree in IT Governance",
      duration: "2018 - 2020"
    },
    {
      schoolName: "Pitágoras Integrated Colleges of Montes Claros",
      logo: "./assets/images/unifipmocLogo.jpeg",
      subHeader: "Bachelor of Civil Egineering",
      duration: "2010 - 2017"
      // desc: "",
      // descBullets: [""]
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
      company: "ICBS Desenvolvimento de Softwares",
      companylogo: "./assets/images/IcbsLogo.jpeg",
      date: "Jun 2022 - Present",
      desc: "I am currently working as a full-stack developer on a mobile application focused on the delivery market and taking on some architect responsibilities by directly engaging with the client to gather system requirements.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Counselor",
      company: "YMCA of Greater Rochester",
      companylogo: "./assets/images/ymcaLogo.jpeg",
      date: "May 2023 - Sep 2023",
      desc: "Cultural exchange that allowed me to improve leadership, creativity, English and teamwork.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Backend developer",
      company: "Ubistart",
      companylogo: "./assets/images/ubistartLogo.jpeg",
      date: "Jun 2022 - Mar 2023",
      desc: "In one of the projects, I worked as a back-end developer on the architecture and implementation of real-time communication applications for video calls and radio using the WebRTC protocol. The project involved stages of call transmission, handling, and recording.In another project, I also worked on the back-end, conceptualizing and developing a machine communication application using a custom protocol.Lastly, I worked as a full-stack developer on a legacy project in the construction industry, where I addressed existing bugs and worked on usability and performance improvements.In most of these projects, there was a need for low-level technologies (sockets, file manipulation, multimedia codecs, ffmpeg, etc.) and high-performance languages (Go) capable of handling various protocols and large volumes of data."
    },
    {
      role: "Pedagogical Monitor",
      company: "Labenu",
      companylogo: "./assets/images/labenuLogo.jpeg",
      date: "Nov 2021 - Jun 2022",
      desc: "At Labenu, I had the opportunity to work in the training of technology professionals, attending classes, providing support, evaluating code, and giving feedback for improvements.The greatest challenge was imparting knowledge to people who often came from entirely different careers outside the IT industry. However, it was a great personal satisfaction to see the impact on their lives and the progress they made thanks to the knowledge they acquired.During this experience, I was able to experience different perspectives on certain technologies, expanding my technical skills and my ability to convey knowledge."
    },
    {
      role: "Bank Enployee",
      company: "Bank of Brazil",
      companylogo: "./assets/images/bancodobrasilLogo.jpeg",
      date: "Jul 2012 - Mar 2021 ",
      desc: "While working in the banking sector, I was involved in promoting and selling various products and services offered by the institution, aligning corporate goals with the needs and desires of customers.Among the biggest challenges was coordinating the efforts of various stakeholders in the credit approval process, which involved overseeing the preparation of technical projects, credit limits with external partners, approval of analyses by operations centers, and negotiations with credit applicants.'\n'I also obtained certification and worked in the investment field, offering products to savings-oriented clients based on their needs.The collaborative environment, where various individuals have different specialties, fosters teamwork and makes it natural for peers, superiors, and subordinates to evaluate each other. This helps develop professionals who are not only capable of providing constructive feedback but also of receiving it, all in pursuit of continuous improvement as professionals."
    }
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
  number: "+55-38999200690",
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
