export interface ProjectCardProps {
  name: string;
  title: string;
  subtitle: string;
  link?: string;
  image: string;
  categories?: ProjectSkill[]
}

export type ProjectSkill = {
    name: string;
    avatar: string;
}