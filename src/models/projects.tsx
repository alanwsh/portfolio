export interface Project {
  experience_id?: Number;
  name: string;
  title: string;
  subtitle: string;
  link?: string;
  image: string;
  categories?: number[];
}

export const Projects: Project[] = [
  {
    experience_id: 1,
    name: '<span class="text-red-500">Fight zone</span>',
    title: "Fitness Franchise Management Solutions",
    subtitle:
      "A fitness brand with multiple franchises in Singapore, for which we developed software solutions, including websites and mobile applications, for use by all their members and staff.",
    link: "https://www.fightzonesg.com/",
    image:
      "https://www.fightzonesg.com/wp-content/uploads/2021/03/fz-favicon.png",
    categories: [1, 2, 3, 4],
  },
  {
    experience_id: 1,
    name: '<span class="text-primary-900">Novel Leap</span>',
    title: "Investment Tracking Software",
    subtitle:
      "They provide financial advisory and investment guidance services, and we developed software solutions to offer a platform for tracking all investments the company has made for their investors.",
    link: "https://www.novelleap.com/",
    image: "/novelleap.png",
    categories: [1, 2, 4],
  },
  {
    experience_id: 1,
    name: '<span class="text-orange-400">Xing Fu Li</span>',
    title: "Online Learning Platform",
    subtitle:
      "They organize online classes regularly. We provide an online platform for them to manage these classes, handle members' packages, and share media with different packages",
    link: "https://xingfuli.co/",
    image: "https://xingfuli.co/img/logoonly.png",
    categories: [1, 2, 3, 4],
  },
  {
    experience_id: 2,
    name: '<span class="text-primary-700">Innovix</span>',
    title: "Online marketplace for computer products and gadgets",
    subtitle:
      "An online marketplace that sell computer products and gadgets in several countries in Asia",
    link: "https://my.innovixmarketplace.com/",
    image:
      "https://my.innovixmarketplace.com/themes/innovix/img/tectd-new-logo.png",
    categories: [5, 6, 4],
  },
  {
    name: '<span class="text-alert">Fixx It</span>',
    title: "A platform to connect house owners with vendors",
    subtitle:
      "The platform exist to address the myriad of challenges faced by home dwellers. The platform offers a wide range of services, from routine maintenance to emergency repairs, all provided by a curated network of verified and genuine vendors.",
    link: "https://fixx-it.my/",
    image:
      "https://app.fixx-it.my/images/logo.png",
    categories: [2, 4, 6],
  },
  {
    name: '<span class="text-primary-700">Wewill</span>',
    title: "A platform for users to create their will",
    subtitle:
      "A platform which allow users to document their assets and designate beneficiaries, creating a legally sound will through the system.",
    image:
      "/wewill.png",
    categories: [1, 2, 4],
  },
];
