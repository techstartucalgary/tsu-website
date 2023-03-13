import joel_jpg from "../../images/team/Joel_Happ.jpeg";
import fedor_jpg from "../../images/team/Fedor_Prokopchuk.jpg";
import tyler_jpg from "../../images/team/Tyler_Chan.jpg";
import sareen_jpg from "../../images/team/Sareen_Singh.jpg";
import niyousha_jpg from "../../images/team/Niyousha_Raeesinejad.jpg";
import carol_jpg from "../../images/team/Carol_Wang.jpg";
import kevin_jpg from "../../images/team/Kevin_Amado.jpg";
import sahiti_jpg from "../../images/team/Sahiti_Akella.jpg";
import rajpreet_jpg from "../../images/team/Rajpreet_Gill.jpg";
import mya_jpg from "../../images/team/Mya_Gill.jpeg";
import labib_jpg from "../../images/team/Labib_Ahmed.jpg";
import nathan_jpg from "../../images/team/Nathan_Karbonik.jpg";
import ben_jpg from "../../images/team/Ben_Schmidt.jpeg";
import nurgul_jpg from "../../images/team/Nurgul_Akhshatayeva.jpg";
import madeline_jpg from "../../images/team/Madeline_Mazurek.jpg";
import leo_jpg from "../../images/team/Leo_Wei.jpg";
import tim_jpg from "../../images/team/Tim_Macphail.jpg";
import nemanja_jpg from "../../images/team/Nemanja_Grujic.jpg";
import ben_shi_jpg from "../../images/team/Ben_Shi.jpg";
import noel_jpg from "../../images/team/Noel_Thomas.jpg";
import estefy_jpeg from "../../images/team/Estefy_Caballero.jpeg";
import rachel_jpg from "../../images/team/Rachel_Renegado.jpg";

export type TeamMember = {
  id: number;
  name: string;
  affiliation: string; // Affiliation refers to roles and projects for executives and PMs respectively
  image: string;
  linkedin: string;
  email: string;
};

export const executiveTeam: TeamMember[] = [
  {
    id: 0,
    name: "Niyousha Raeesinejad",
    affiliation: "Co-President",
    image: niyousha_jpg,
    linkedin: "https://www.linkedin.com/in/niyoushar/",
    email: "mailto:niyousha.raeesinejad@ucalgary.ca",
  },
  {
    id: 1,
    name: "Rajpreet Gill",
    affiliation: "Co-President",
    image: rajpreet_jpg,
    linkedin: "https://www.linkedin.com/in/rajpreet-gill/",
    email: "mailto:rajpreet.gill@ucalgary.ca",
  },

  {
    id: 2,
    name: "Fedor Prokopchuk",
    affiliation: "VP Strategy",
    image: fedor_jpg,
    linkedin: "https://www.linkedin.com/in/fedor-prokopchuk-707668a6/",
    email: "mailto:fedor.prokopchuk@ucalgary.ca",
  },

  {
    id: 3,
    name: "Noel Thomas",
    affiliation: "VP Events",
    image: noel_jpg,
    linkedin: "https://www.linkedin.com/in/noelfranthomas/",
    email: "mailto:noel.thomas@ucalgary.ca",
  },
  {
    id: 4,
    name: "Ben Shi",
    affiliation: "Jr VP Events",
    image: ben_shi_jpg,
    linkedin: "https://www.linkedin.com/in/ben-shi-228651189",
    email: "mailto:ben.shi@ucalgary.ca",
  },

  {
    id: 5,
    name: "Carol Wang",
    affiliation: "VP Internal",
    image: carol_jpg,
    linkedin: "https://www.linkedin.com/in/carol-wang3116/",
    email: "mailto:carol.wang2@ucalgary.ca",
  },
  {
    id: 6,
    name: "Tyler Chan",
    affiliation: "VP Communications",
    image: tyler_jpg,
    linkedin: "https://www.linkedin.com/in/chan-tyler/",
    email: "mailto:tyler.chan@ucalgary.ca",
  },
  {
    id: 7,
    name: "Sahiti Akella",
    affiliation: "Jr VP Communications",
    image: sahiti_jpg,
    linkedin: "https://www.linkedin.com/in/sahiti-akella/",
    email: "mailto:sahiti.akella@ucalgary.ca",
  },

  {
    id: 8,
    name: "Estefy Caballero",
    affiliation: "Media Commissioner",
    image: estefy_jpeg,
    linkedin: "https://www.linkedin.com/in/estefy-caballero-864aab25a",
    email: "",
  },
  {
    id: 9,
    name: "Kevin Amado",
    affiliation: "VP Development",
    image: kevin_jpg,
    linkedin: "https://www.linkedin.com/in/kamadorueda/",
    email: "mailto:kevin.amadorueda@ucalgary.ca",
  },

  {
    id: 10,
    name: "Rachel Renegado",
    affiliation: "Senior Software Advisor",
    image: rachel_jpg,
    linkedin: "https://www.linkedin.com/in/rachel-renegado-544409201",
    email: "",
  },

  {
    id: 11,
    name: "Mya Gill",
    affiliation: "VP Community",
    image: mya_jpg,
    linkedin: "https://www.linkedin.com/in/mya-gill-71a8451b8/",
    email: "mailto:mya.gill@ucalgary.ca",
  },
  {
    id: 12,
    name: "Labib Afshar Ahmed",
    affiliation: "VP Finance",
    image: labib_jpg,
    linkedin: "https://www.linkedin.com/in/labib-afsar-ahmed/",
    email: "mailto:labibafsar.ahmed@ucalgary.ca",
  },
  {
    id: 13,
    name: "Nathan Karbonik",
    affiliation: "VP External",
    image: nathan_jpg,
    linkedin: "https://www.linkedin.com/in/nathan-karbonik/",
    email: "mailto:nathan.karbonik@ucalgary.ca",
  },
  {
    id: 14,
    name: "Sareen Singh",
    affiliation: "Advisor",
    image: sareen_jpg,
    linkedin:
      "https://www.linkedin.com/in/sareen-singh-309b55173/?originalSubdomain=ca",
    email: "mailto:sareen.singh@ucalgary.ca",
  },
  {
    id: 15,
    name: "Joel Happ",
    affiliation: "Founder & Chairman",
    image: joel_jpg,
    linkedin: "https://www.linkedin.com/in/joel-happ/",
    email: "mailto:joel.happ1@ucalgary.ca",
  },
];

export const projectManagers: TeamMember[] = [
  {
    id: 0,
    name: "Ben Schmidt",
    affiliation: "Project Manager",
    image: ben_jpg,
    linkedin: "https://linkedin.com/in/benschmidt2343",
    email: "mailto:benjamin.schmidt@ucalgary.ca",
  },

  {
    id: 1,
    name: "Leo Wei",
    affiliation: "Project Manager",
    image: leo_jpg,
    linkedin: "https://www.linkedin.com/in/leo-wei/",
    email: "mailto:hanzhe.wei@ucalgary.ca ",
  },

  {
    id: 2,
    name: "Madeline Mazurek",
    affiliation: "Project Manager",
    image: madeline_jpg,
    linkedin: "https://www.linkedin.com/in/madeline-mazurek/",
    email: "mailto:madeline.mazurek@ucalgary.ca",
  },

  {
    id: 3,
    name: "Nemanja Grujic",
    affiliation: "Project Manager",
    image: nemanja_jpg,
    linkedin: "https://www.linkedin.com/in/nemanja-grujic-5828a1213",
    email: "mailto:nemanja.grujic@ucalgary.ca ",
  },

  {
    id: 4,
    name: "Nurgul Akhshatayeva",
    affiliation: "Project Manager",
    image: nurgul_jpg,
    linkedin: "https://www.linkedin.com/in/nurgul-akhshatayeva-6821b0205/",
    email: "mailto:nurgul.akhshatayeva@ucalgary.ca ",
  },

  {
    id: 5,
    name: "Tim Macphail",
    affiliation: "Project Manager",
    image: tim_jpg,
    linkedin:
      "https://www.linkedin.com/in/timothy-macphail?originalSubdomain=ca",
    email: "mailto:timothy.macphail@ucalgary.ca ",
  },
];
