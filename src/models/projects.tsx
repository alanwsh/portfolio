export interface Project {
  name: string;
  title: string;
  subtitle: string;
  link?: string;
  image: string;
  categories?: ProjectSkill[];
}

export interface ProjectSkill {
  name: string;
  avatar: string;
};
