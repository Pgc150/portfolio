import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import payal_photo from '../assets/payal_photo.avif'
import food_delivery from '../assets/food_delivery.avif'
import chat_app from '../assets/chat_app.avif'
import expense_tracker from '../assets/expense_tracker.avif'
import portfolio from '../assets/portfolio.avif'
export const assets = {
    profileImg,payal_photo
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'NextJS', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', ]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
 
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];



export const projects = [

  {
    title: "Real Time Chat Application",
    description: "Developed a full-stack real-time chat application using React (Vite), Node.js, Express, MongoDB, and Socket.io, enabling instant bi-directional communication .",
    image: chat_app,
    tech: ["React", "Node.js", "MongoDB", "Stripe","websockets"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "https://github.com/Pgc150/Real-time-Chat-application",
  },

  {
    title: "Food Delivery App",
    description: "Developed a full-stack food ordering website using MERN stack (MongoDB, Express.js, React.js, Node.js), integrating JWT authentication, secure user and admin dashboards, and Stripe payment gateway for online transactions ",
    image: food_delivery,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://food-del-webapp.netlify.app/",
    code: "https://github.com/Pgc150/Food-delivery-fullstack-app/tree/master",
  },
   {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "https://github.com/Pgc150/E-commerce-website",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: portfolio,
    tech: ["React Js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Expense Tracker",
    description: "The Personal Expense Tracker is a web application built using React.js that helps users track their income and expenses. Users can add transactions, and the application automatically calculates the total income, total expenses, and remaining balance in real time.The data is stored using Browser Local Storage, so the information is not lost on refresh. For better understanding, the app uses react-chartjs-2 to display a doughnut chart showing income versus expenses. The application has a simple and user-friendly interface for effective personal finance management.",
    image: expense_tracker,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://astounding-travesseiro-f0c82d.netlify.app/",
    code: "https://github.com/Pgc150/Expense-Tracker-Webapp",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Frontend Developer Intern",
    company: "InternCrowd LLP",
    duration: "Jan 2023 - Feb 2023",
    description:
      "Gained hands-on experience in developing responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React.js. Worked on building reusable components, integrating APIs, and improving UI performance while following best practices in modern frontend development.",
  }
  
];
