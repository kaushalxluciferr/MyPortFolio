// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const projects = [
    {
      id: 0,
      title: "SkillShare",
      description:
        "Skill Share is a platform where users can share their skills and learn from others. You can view others’ skills and learning interests, choose someone to connect with, and send messages easily.",
      image: "https://cdn.dribbble.com/userupload/14940721/file/original-2fa5f23014a4231a5d200ef9c1913419.png",
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Cloudinary", "multer", "jwt"],
      github: "https://github.com/kaushalxluciferr/SkillShare",
      webapp: "https://skill-share-frontend.vercel.app/",
    },
    {
      id: 1,
      title: "Doctor-Appointment",
      description:
        "The Doctor Appointment Booking System allows admins to register doctors and manage their schedules, doctors to log in and approve appointments, and patients to browse doctors by specialization and book available slots. It streamlines appointment management for all users.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dT50wLNs0nzkX8m-0ktWt34o_MPN34oP5A&s",
      tags: ["React JS","Node.js","MongoDB","Express","Cloudinary","multer","jwt"],
      github: "https://github.com/kaushalxluciferr/Doctor-Appointment",
      webapp: "https://doctor-appointment-admin-ruddy.vercel.app/",
    },
    {
      id: 2,
      title: "Employee Management System",
      description:
        "The Employee Management System is a web application designed to manage employee records and operations efficiently. Admins can add, update, or remove employee details, assign departments, manage salaries, approve or reject leave requests, and view holidays. Employees can log in to view their profiles, apply for leave, check bonuses, and update passwords. This system helps streamline HR tasks and improves organizational productivity.",
      image: "https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2023/11/Employee-Management-System.png",
      tags: ["React JS","Node.js","MongoDB","Express","Cloudinary","multer","jwt"],
      github: "https://github.com/kaushalxluciferr/EMS-Frontend",
      webapp: "https://ems-frontend-nine-beryl.vercel.app/",
    },
    {
      id: 3,
      title: "Job Portal",
      description:
        "The Job Portal is a web application where companies can register their profiles and post job openings. Once registered, companies can add job details such as title, description, location, and requirements. Users can browse these job listings, filter them based on categories or keywords, and apply directly through the portal. This system connects job seekers with employers, making the hiring process efficient and streamlined.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcv-wk60BVyLMXcK5a34NFs35r9qVbAZSig&s",
      tags: ["React JS","Node.js","MongoDB","Express","Cloudinary","multer","jwt"],
      github: "https://github.com/kaushalxluciferr/job-portal",
      webapp: "https://jobportal-frontend-rose.vercel.app/",
    },
    {
      id: 4,
      title: "AI Code Reviewer",
      description:
        "The AI Code Reviewer is a web application powered by a Node.js backend and integrated with the Gemini API. Users submit their code through the interface, which is then sent to the Gemini API via the backend for analysis. The AI reviews the code and provides feedback indicating whether the code is good or needs improvement. Along with this evaluation, it also returns an updated or optimized version of the code if necessary. This system helps developers get instant AI-powered code reviews and improvement suggestions.",
      image: "https://cdn.prod.website-files.com/63994dae1033718bee6949ce/63a2150550ebce31a75252ac_OGP.png",
      tags: ["React JS","Node.js","MongoDB","Express","Gemini-API"],
      github: "https://github.com/kaushalxluciferr/AI_CODE-RIVIEWER",
      webapp: "https://codereview-frontend.vercel.app/",
    },
    
    {
      id: 5,
      title: "Fullstack Ecommerce Website",
      description:
        "An eCommerce system is a web application that allows users to browse products, add them to a cart, and make purchases online. Admins or sellers can manage products, update stock, and handle orders. Users can sign up, log in, view product details, place orders, and make payments. It simplifies online shopping and provides a smooth buying and selling experience.",
      image: "https://www.businessnewsdaily.com/_next/image?url=https%3A%2F%2Fimages.businessnewsdaily.com%2Fapp%2Fuploads%2F2022%2F04%2F04073619%2Fhow-ecommerce-works.png&w=1200&q=75",
      tags: ["React JS","Node.js","MongoDB","Express","Cloudinary","multer","jwt"],
      github: "https://github.com/kaushalxluciferr/MERN-ecommerce",
      webapp: "https://mern-ecommerce-lemon.vercel.app/",
    }
  ]; 



  