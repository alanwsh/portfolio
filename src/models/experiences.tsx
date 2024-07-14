import Sparksoft from "@/app/portfolio/components/experiences/Sparksoft";
import Vintedge from "@/app/portfolio/components/experiences/Vintedge";
import { Project } from "./projects";

export type Experience = {
  id: Number;
  title: string;
  company: string;
  start_date: Date;
  end_date?: Date;
  content: React.ReactNode;
  projects?: Project[];
};

export const experiences: Experience[] = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Sparksoft Sdn Bhd",
      start_date: new Date(2022, 4, 1),
      content: <Sparksoft />,
    },
    {
      id: 2,
      title: "Junior Web Developer",
      company: "Vintedge Sdn Bhd",
      start_date: new Date(2021, 7, 1),
      end_date: new Date(2021, 11, 1),
      content: <Vintedge />,
    },
  ];