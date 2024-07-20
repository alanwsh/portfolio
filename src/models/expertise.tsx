export type Expertise = {
  icon: string;
  title: string;
  description: string;
  image: string;
  skills: number[]
};

export const expertises: Expertise[] = [
  {
    icon: "",
    title: "Website Development",
    description: "Developing responsive and customized websites tailored to meet the unique business requirements of my clients",
    image: "/web.png",
    skills: [1,2,4,6],
  },
  {
    icon: "",
    title: "Mobile Application Development",
    description: "Develop mobile application using hybrid framework to deploy a single app on multiple operating systems",
    image: "/mobile.png",
    skills: [3]
  },
];
