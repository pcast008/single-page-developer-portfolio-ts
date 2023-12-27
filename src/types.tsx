export type TSkill = {
  name: string;
  years: string;
};

export type TSkills = TSkill[];

export type TProject = {
  title: string;
  skills: string[];
  image: string;
};

export type TProjects = TProject[];
