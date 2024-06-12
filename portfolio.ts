import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "FADH",
  title: "Hi all, I'm Fadh",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Laravel, Next, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "fadhdwisamns",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:fadhdwisam@gmail.com",
  linkedin: " ",
  github: "https://github.com/fadhdwisamns",
  instagram: "https://www.instagram.com/@lordginjer",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Laravel & NodeJS REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "android",
          iconifyTag: "logos:kotlin",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Laravel",
          iconifyTag: "logos:laravel",
        },
        {
          skillName: "Flutter",
          iconifyTag: "logos:flutter",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "SMAN 18",
    subHeader: "High School",
    duration: "2011/2012",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "PT Elga Yasa Media",
    companyLogo: "/img/icons/common/elga.jpeg",
    date: "jan 2020 - Aug 2021",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Full Stack Developer",
    company: "CV Unitech Indonesia",
    companyLogo: "/img/icons/common/unicase.png",
    date: "Okt 2023 - present",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Backend Developer",
    company: "PT Evolusi Teknologi Idonesia",
    companyLogo: "/img/icons/common/evotek.png",
    date: "Aug 2022 - Jun 2023",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/fadhdwisamns/portfolio",
    link: "https://fadh-portfolio.vercel.app/",
  },
  {
    name: "Unicase",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://unicasestore.com/",
  },
  {
    name: "Benerit",
    desc: "benerIT is an IT Helpdesk On-Demand platform that brings together users of computer equipment or technology from individuals or companies with partners, with a fee per job performed only.",
    link: "https://play.google.com/store/apps/details?id=com.elganetwork.userbenerit.userbenerit",
  },
  {
    name: "POS",
    desc: "A POS Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://ifonfix.shop/vitepos#/login",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Shobirin",
    role: "Frontend Developer ",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Ken Sasmita",
    role: "CEO at Jangkar Eco Park",
    feedback:
      "Fadh has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Fadh Dwi Samn S",
  description: greetings.description,
  author: "Fadh Dwi Samn S",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://fadh.vercel.app",
  keywords: [
    "Fadh Dwi Samn S",
    "Fadh Dwi Samn S",
    "@lordginjer",
    "Fadh Dwi Samn S",
    "Portfolio",
    "Fadh Portfolio ",
    "Fadh Dwi Samn S Portfolio",
  ],
};
