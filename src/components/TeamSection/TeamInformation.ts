import tyler_jpg from "../../images/team/Tyler_Chan.jpg";
import niyousha_jpg from "../../images/team/Niyousha_Raeesinejad.jpg";
import carol_jpg from "../../images/team/Carol_Wang.jpg";
import rajpreet_jpg from "../../images/team/Rajpreet_Gill.jpg";
import labib_jpg from "../../images/team/Labib_Ahmed.jpg";
import ana_jpg from "../../images/team/Ana_Laura.jpg";
import estefy_jpeg from "../../images/team/Estefy_Caballero.jpg";
import maheen_jpg from "../../images/team/Maheen_Raza.jpg";
import ben_jpg from "../../images/team/Ben_Schmidt.jpg";
import aarsh_jpg from "../../images/team/Aarsh_Shah.jpg";
import hilton_jpg from "../../images/team/Hilton_Luu.jpg";
import wilbur_jpg from "../../images/team/Wilbur_Elbouni.jpg";
import naman_jpg from "../../images/team/Naman_Bhoj.jpg";
import lujaina_jpg from "../../images/team/Lujaina_ Eldelebshany.jpg";
import hamza_jpg from "../../images/team/Hamza_Afzaal.jpg";
import joel_jpg from "../../images/team/Joel_Happ.jpeg";
import rachel_jpg from "../../images/team/Rachel_Renegado.jpg";
import brian_jpg from "../../images/team/Brian_Nguyen.jpg";
import esther_jpg from "../../images/team/Esther_Thompson.jpg";
import ivan_jpg from "../../images/team/Ivan_Imshenetskyy.jpg";
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