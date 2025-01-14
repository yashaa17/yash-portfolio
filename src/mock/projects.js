 import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: './bmd.jpg',
    title: 'Book My Driver',
    techIcons: [
     
      getSkillByLabel(BACKEND_SKILLS, 'Spring Boot'),
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      
      
    ],
    description:
      'Book My Driver is platform designed for car owners who need professional drivers to operate their vehicles. Whether you are an individual unable to drive due to personal reasons or simply prefer not to, Book My Driver connects you with a skilled drivers. Its an ideal solution for those who wants to maintain control over their own vehicles.',
    repoLink: 'https://github.com/yashaa17/CDAC_PROJECT.git',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: './portfolio.jpg',
    title: 'Developer Portfolio',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      
    ],
    description:
      'Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Next Js.',
    repoLink: 'https://github.com/yashaa17/yash-portfolio.git',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: './clothing.jpg',
    title: 'StyleHub Clothing E-Commerce',
    techIcons: [
      getSkillByLabel(BACKEND_SKILLS, 'Spring Boot'),
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
     
      // {
      //   label: 'Java',
      //   icon: 'logos:java',
      // },
      
    ],
    description:
      'StyleHub is an online clothing store designed to make shopping simple and enjoyable for everyone. With an attractive and easy to navigate design, customers can browse a variety of clothing options, add their favorites to the shopping cart, and complete their purchase securely. The platform ensures a hassle-free experience, helping users find and buy fashionable clothing with ease. ',
    repoLink: 'https://github.com/yashaa17/StyleHub_Ecommerce_Site.git',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: './AllEars.jpg',
    title: 'AllEars: Companion for your mental wellness',
    techIcons: [
      getSkillByLabel(BACKEND_SKILLS, 'ASP.NET'),
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'), 
    ],
    description: 'AllEars is an accessible mental healthcare platform offering free counselling sessions for general mental health support and paid clinical psychology sessions for specialized care. Users can select their mental health category, book sessions with couselling or clinical psychologists, and view appointment status. For paid sessions, the platform ensures transparency with clear billing, providing a supportive user experience.',
    repoLink: 'https://github.com/yashaa17/AllEars.git',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
