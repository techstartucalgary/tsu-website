import mehrnaz_jpg from "../../images/team/Mehrnaz_Zafari.jpg";
import parsa_jpg from "../../images/team/Parsa_Kargari.jpg";
import youssef_jpg from "../../images/team/Youssef_Hamed.jpg";
import teamData from "./teamMembers.json";

// dynamically import image based on the imageName parameter
const importImage = (imageName: string) => {
  return require(`../../images/team/${imageName}`);
}

export type TeamMember = {
  id: number;
  name: string;
  affiliation: string; // Affiliation refers to roles and projects for executives and PMs respectively
  image: string;
  linkedin: string;
};

type FounderDescription = {
  description: string;
};

export type FounderInfo = TeamMember & FounderDescription;

export const founder: FounderInfo = {
  ...teamData.founder,
  image: importImage(teamData.founder.imagePath)
};

export const executiveTeam: TeamMember[] = teamData.executiveTeam.map((exec, index) => (
  {
    id: index,
    ...exec,
    image: importImage(exec.imagePath)
  }));

export const projectManagers: TeamMember[] = teamData.projectManagers.map((pm, index) => ({
  id: index,
  ...pm,
  image: importImage(pm.imagePath)
}));

export const boardMembers: TeamMember[] = teamData.boardMembers.map((bm, index) => ({
  id: index,
  ...bm,
  image: importImage(bm.imagePath)
}))