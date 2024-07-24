import { ColorKey } from "./color";

export interface Project {
  experience_id?: Number;
  name: string;
  title: string;
  subtitle: string;
  contributions: string;
  link?: string;
  image: string;
  categories?: number[];
  details?: ProjectDetailSection[];
  color?: ColorKey;
  recent?: boolean;
}

interface ProjectDetailSection {
  title: string;
  display?: string;
  galleries: string[];
}

export const Projects: Project[] = [
  {
    experience_id: 1,
    color: 'red',
    name: 'Fight zone',
    title: "Fitness Franchise Management Solutions",
    subtitle:
      "A fitness brand with multiple franchises in Singapore.We developed websites and mobile applications supporting various modules such as CRM, timesheet payroll, commission management, and scheduling for shifts and classes.",
    link: "https://www.fightzonesg.com/",
    image:
      "https://www.fightzonesg.com/wp-content/uploads/2021/03/fz-favicon.png",
    categories: [1, 2, 3, 4],
    contributions: "Implemented integrations with various payment gateways and AWS IOT Core. Developed broadcasting module to send marketing content to clients. Designed and implemented business functionalities according to requirements, such as membership suspension and termination.",
    details: [
      // {
      //   title: "Admin Backoffice",
      //   galleries: [
      //     "/fightzone/class.png",
      //     "/fightzone/client_profile.png",
      //     "/fightzone/dashboard.png",
      //     "/fightzone/inventory.png",
      //     "/fightzone/learn.png",
      //     "/fightzone/reports.png",
      //     "/fightzone/shift.png",
      //   ],
      // },
      {
        title: "Member Application",
        galleries: [
          "/fightzone/app1.webp",
          "/fightzone/member_appointment.webp",
        ],
      },
      {
        title: "Trainer Application",
        galleries: [
          "/fightzone/staff_home.webp",
          "/fightzone/staff_shift.webp",
          "/fightzone/staff_appointment.webp",
        ],
      },
    ],
    recent: true,
  },
  {
    experience_id: 1,
    color: 'primary',
    name: 'Novel Leap',
    title: "Investment Tracking Software",
    subtitle:
      "They provide financial advisory and investment guidance services, and we developed software solutions to offer a platform for tracking all investments the company has made for their investors.",
    link: "https://www.novelleap.com/",
    image: "/novelleap.png",
    contributions: "Entire application is designed and developed only by myself from scratch",
    categories: [1, 2, 4],
    recent: true,
    details: [
      {
        title: "Admin Backoffice",
        display: 'row',
        galleries: [
          "/nlp/staff_home.png",
          "/nlp/staff_rate.png",
          "/nlp/staff_report.png",
        ],
      },
      {
        title: "Investor Portal",
        galleries: [
          "/nlp/investor_home.png",
          "/nlp/investor_crypto.png",
          "/nlp/investor_bank.png",
        ],
      },
    ],
  },
  {
    experience_id: 1,
    name: 'Xing Fu Li',
    color: 'alert',
    title: "Online Learning Platform",
    subtitle:
      "They organize online classes regularly. We provide an online platform for them to manage these classes, handle members' packages, and share media with different packages",
    link: "https://xingfuli.co/",
    image: "https://xingfuli.co/img/logoonly.png",
    contributions: "Implemented localization for apps and websites, integrated multipart upload on AWS S3 for large media files such as video recordings, and integrated the PayEx payment gateway",
    categories: [1, 2, 3, 4],
  },
  {
    experience_id: 2,
    name: 'Innovix',
    title: "Online marketplace for computer products and gadgets",
    subtitle:
      "An online marketplace that sell computer products and gadgets in several countries in Asia",
    link: "https://my.innovixmarketplace.com/",
    image:
      "https://my.innovixmarketplace.com/themes/innovix/img/tectd-new-logo.png",
    contributions: "Maintained the website, updated the UI, and added new functionalities such as user address management and support for multiple delivery methods for e-commerce orders.",
    categories: [5, 6, 4],
  },
  {
    name: 'Fixx It',
    color: 'alert',
    title: "A platform to connect house owners with vendors",
    subtitle:
      "The platform exist to address the myriad of challenges faced by home dwellers. The platform offers a wide range of services, from routine maintenance to emergency repairs, all provided by a curated network of verified and genuine vendors.",
    link: "https://fixx-it.my/",
    image: "https://app.fixx-it.my/images/logo.png",
    contributions: "Developed a complete mobile application and distributed it to various OS app stores. Managed several back-office modules, including chat, residence management, and services (appointments, contracts, etc.), and integrated the PayEx payment gateway",
    categories: [2, 4, 6],
    recent: true,
  },
  {
    name: 'Wewill',
    color: 'primary',
    title: "A platform for users to create their will",
    subtitle:
      "A platform which allow users to document their assets and designate beneficiaries, creating a legally sound will through the system.",
    image: "/wewill.png",
    contributions: "Freelance project managed entirely by myself, handling all aspects of development.",
    categories: [1, 2, 4],
  },
];
